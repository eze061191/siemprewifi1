"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  composeRenderProps,
} from "react-aria-components"
import { Link as RouterLink, To } from "react-router-dom"; 

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

// Define LinkProps: Omit 'href' from AriaLinkProps to avoid conflict, and add 'to' for RouterLink.
interface LinkProps
  extends Omit<AriaLinkProps, 'href'>,
    VariantProps<typeof buttonVariants> {
    to: To; // Use 'to' for react-router-dom
    elementType?: React.ElementType;
    className?: string;
    children?: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ className, variant, size, children, to, ...props }, ref) => {
  return (
    <AriaLink
      ref={ref}
      // Use RouterLink as the underlying element to handle 'to' prop
      elementType={RouterLink}
      // Pass 'to' directly. RouterLink expects 'to', not 'href'.
      to={to}
      className={composeRenderProps(className, (className) =>
        cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )
      )}
      {...props}
    >
      {children}
    </AriaLink>
  )
});

Link.displayName = "Link";

export { Link }
export type { LinkProps }