import * as React from "react";
import type { SVGProps } from "react";
const SvgOrder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 9H8m8 3H8m5 3H8m11.449 5.396-.99.497a1 1 0 0 1-.892.003l-1.573-.777-1.54.774a1 1 0 0 1-.895.002L12 20.119l-1.559.776a1 1 0 0 1-.894-.002l-1.541-.774-1.573.777a1 1 0 0 1-.892-.003l-.99-.497A1 1 0 0 1 4 19.503V4.498a1 1 0 0 1 .551-.894l.99-.498a1 1 0 0 1 .892-.002l1.573.777 1.54-.774a1 1 0 0 1 .895-.001L12 3.882l1.559-.776a1 1 0 0 1 .894.001l1.541.774 1.573-.777a1 1 0 0 1 .892.002l.99.498a1 1 0 0 1 .551.894v15.005a1 1 0 0 1-.551.893"
    />
  </svg>
);
export default SvgOrder;
