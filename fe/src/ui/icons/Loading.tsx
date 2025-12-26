import * as React from "react";
import type { SVGProps } from "react";
const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.004 12h-3.002M2.997 12h3M12 2.996v3.001M12 21.004v-3.001M18.367 18.367l-2.122-2.122M5.633 5.633l2.122 2.122M16.245 7.755l2.122-2.122M7.755 16.245l-2.122 2.122"
    />
  </svg>
);
export default SvgLoading;
