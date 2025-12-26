import * as React from "react";
import type { SVGProps } from "react";
const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    stroke="currentColor"
  >
    <path

      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20.003a8 8 0 0 0 7.03-4.177M20.003 12A8.003 8.003 0 0 0 12 3.997M12 3.997a8 8 0 0 0-7.03 4.176M3.997 12A8.003 8.003 0 0 0 12 20.003"
    />
    <path

      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.97 8.173A8.003 8.003 0 0 1 20.004 12M3.997 12a8.003 8.003 0 0 0 15.033 3.827"
    />
    <path

      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.045 8.173H4.51V4.636M15.955 15.827h3.536v3.537"
    />
  </svg>
);
export default SvgRefresh;
