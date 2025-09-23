import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#666"
      strokeWidth={1.5}
      d="m19.528 7.986-5.76-4.48a2.88 2.88 0 0 0-3.536 0l-5.76 4.48A2.88 2.88 0 0 0 3.36 10.26v7.04a2.88 2.88 0 0 0 2.88 2.88h11.52a2.88 2.88 0 0 0 2.88-2.88v-7.04c0-.887-.41-1.726-1.112-2.273Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHome;
