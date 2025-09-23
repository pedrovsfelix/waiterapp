import * as React from "react";
import type { SVGProps } from "react";
const SvgUsers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={7.999}
      cy={8.509}
      r={3.491}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <circle
      cx={17.003}
      cy={9.499}
      r={2.501}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.996 20.003v-1.017C1.996 16.785 3.78 15 5.981 15h4.035a3.984 3.984 0 0 1 3.985 3.985v1.017M17.002 15.001h1.103c2.2 0 3.985 1.784 3.985 3.985v1.017"
    />
  </svg>
);
export default SvgUsers;
