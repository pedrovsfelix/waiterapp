import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.75 7.16 3.09 3.09M5.293 15.619 15.619 5.293a1 1 0 0 1 1.413 0l1.676 1.676a1 1 0 0 1 0 1.413L8.381 18.707a1 1 0 0 1-.706.293H5v-2.675c0-.265.105-.519.293-.706"
    />
  </svg>
);
export default SvgEdit;
