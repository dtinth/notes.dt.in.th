// Adapted from https://github.com/iconify/iconify/blob/3fe91ddea3f421832a20aa5cf8d8ba4dfcbbe8f8/iconify-icon/react/src/iconify.ts
// License: https://github.com/iconify/iconify/blob/3fe91ddea3f421832a20aa5cf8d8ba4dfcbbe8f8/iconify-icon/react/license.txt

/* eslint-disable react/display-name */

import type {
  IconifyIconHTMLElement,
  IconifyIconProperties,
} from "iconify-icon"
import React from "react"

/**
 * Properties for React component
 */
export interface IconifyIconProps
  extends React.HTMLProps<HTMLElement>,
    IconifyIconProperties {
  // Rotation can be string or number
  rotate?: string | number
}

/**
 * React component
 */
export const Icon = React.forwardRef(
  (
    props: IconifyIconProps,
    ref: React.ForwardedRef<IconifyIconHTMLElement>
  ) => {
    const newProps: Record<string, unknown> = {
      ...props,
      ref,
    }

    // Stringify icon
    if (typeof props.icon === "object") {
      newProps.icon = JSON.stringify(props.icon)
    }

    // Boolean
    if (!props.inline) {
      delete newProps.inline
    }

    // React cannot handle className for web components
    if (props.className) {
      newProps["class"] = props.className
    }

    return React.createElement("iconify-icon", newProps)
  }
)

export type { IconifyIcon } from "iconify-icon"
