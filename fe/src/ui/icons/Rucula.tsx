import * as React from "react";
import type { SVGProps } from "react";
const SvgRucula = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#000" d="M4 20.12h16v-16H4z" />
  </svg>
);
export default SvgRucula;
