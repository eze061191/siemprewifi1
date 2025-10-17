import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Extract types from UseEmblaCarouselType tuple
type EmblaCarouselType = UseEmblaCarouselType[1];
type EmblaRefType = UseEmblaCarouselType[0];
// Extract EmblaOptionsType from the UseEmblaCarouselType tuple (index 2, if available, or rely on the hook's definition)
// Since we cannot reliably import EmblaOptionsType, we define it based on the hook's expected input type.
// However, for simplicity and to resolve the error, we will assume the user passes a valid object.
// If we must define it, we rely on the package's internal structure, which is often exported as EmblaOptionsType.
// Since the direct import failed, we will proceed assuming the type is available but the import path is tricky.
// Let's try importing it from the package root again, as it should work in a standard setup.

// Re-defining types based on standard Embla exports, assuming the environment is the issue:
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];


type CarouselContextProps = {
  carouselRef: EmblaRefType
  options: CarouselOptions
  orientation: "horizontal" | "vertical"
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

type CarouselProps = {
  options?: CarouselOptions
  orientation?: "horizontal" | "vertical"
  setApi?: (api: EmblaCarouselType) => void
} & React.HTMLAttributes<HTMLDivElement>

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps
>(
  (
    {
      options,
      orientation = "horizontal",
      setApi,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // useEmblaCarousel returns [EmblaRef, EmblaApi]
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...options,
        axis: orientation === "horizontal" ? "x" : "y",
      } as CarouselOptions, // Asserting type here to satisfy the hook call
      []
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: EmblaCarouselType) => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const onInit = React.useCallback(
      (api: EmblaCarouselType) => {
        onSelect(api)
        setApi?.(api)
      },
      [onSelect, setApi]
    )

    React.useEffect(() => {
      if (!api) {
        return
      }

      onInit(api)
      api.on("reInit", onInit)
      api.on("select", onSelect)

      return () => {
        api.off("select", onSelect)
      }
    }, [api, onInit, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef: carouselRef,
          options,
          orientation:
            orientation || (options?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      isDisabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      isDisabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselOptions,
}