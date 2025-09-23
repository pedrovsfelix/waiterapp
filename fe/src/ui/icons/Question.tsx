import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 12.711 1.328-.737A2.09 2.09 0 0 0 14.4 10.15a2.3 2.3 0 0 0-2.42-2.152 2.345 2.345 0 0 0-2.382 1.813"
    />
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
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.1 15.902a.1.1 0 1 1-.2 0 .1.1 0 0 1 .2 0"
    />
  </svg>
);
export default SvgQuestion;
