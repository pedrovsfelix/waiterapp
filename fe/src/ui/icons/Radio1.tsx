import * as React from "react";
import type { SVGProps } from "react";
const SvgRadio1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={9.004}
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      fill="#666"
      fillRule="evenodd"
      d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRadio1;
