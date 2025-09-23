import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.543 21.004H8.457a2.25 2.25 0 0 1-2.244-2.079L5.247 6.373h13.506l-.966 12.552a2.25 2.25 0 0 1-2.244 2.079"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.003 6.373H3.997"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.187 2.996h5.627c.621 0 1.125.504 1.125 1.126v2.25H8.061v-2.25c0-.622.504-1.126 1.126-1.126"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.97 10.875v5.627M10.03 10.875v5.627"
    />
  </svg>
);
export default SvgTrash;
