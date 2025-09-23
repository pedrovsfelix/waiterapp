import * as React from "react";
import type { SVGProps } from "react";
const SvgLogOff = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 6.343a8 8 0 1 1-11.314 0M12 4v8"
    />
  </svg>
);
export default SvgLogOff;
