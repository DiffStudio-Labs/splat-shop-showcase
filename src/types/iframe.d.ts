
import React from "react";

declare module "react" {
  interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitAllowFullScreen?: boolean | "true" | "false";
    mozallowfullscreen?: boolean | "true" | "false";
  }
}
