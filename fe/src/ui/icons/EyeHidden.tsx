import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeHidden = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 19c-.842 0-1.685-.178-2.504-.495M20.882 12.468C18.99 15.967 15.495 19 12 19M19.08 8.921a15 15 0 0 1 1.802 2.612.99.99 0 0 1 0 .935M5 19 19 5M9.773 14.227a3.15 3.15 0 0 1 4.455-4.455"
    />
    <path
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.044 6.956C15.497 5.759 13.748 5 12 5c-3.495 0-6.99 3.033-8.882 6.533a.99.99 0 0 0 0 .935c.946 1.749 2.292 3.381 3.838 4.577"
    />
  </svg>
);
export default SvgEyeHidden;
