import * as React from "react";
import type { SVGProps } from "react";
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.1 9.4c1.2 1.2 1.2 3.1 0 4.2s-3.1 1.2-4.2 0-1.2-3.1 0-4.2 3-1.2 4.2 0M5.9 20c1.6-1.5 3.7-2.5 6.1-2.5 2.3 0 4.5.9 6.1 2.5M4 17c-.6-1.2-1-2.6-1-4 0-5 4-9 9-9s9 4 9 9c0 1.4-.4 2.8-1 4"
    />
  </svg>
);
export default SvgProfile;
