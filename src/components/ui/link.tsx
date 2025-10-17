"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  composeRenderProps,
} from "react-aria-components"
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

// Define LinkProps to merge AriaLink styling props with RouterLink navigation props ('to')
interface LinkProps
  extends AriaLinkProps,
    VariantProps<typeof buttonVariants>,
    Omit<RouterLinkProps, 'className' | 'children'> {
    className?: string;
    children?: React.ReactNode;
}

const Link = ({ className, variant, size, children, to, ...props }: LinkProps) => {
  return (
    <AriaLink
      // Use RouterLink as the underlying element to handle 'to' prop
      elementType={RouterLink}
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
}

export { Link }
export type { LinkProps }