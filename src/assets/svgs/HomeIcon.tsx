import React from "react";

const HomeIcon = () => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 7.82096C9 7.55872 9.10302 7.30697 9.28686 7.11995L15.5726 0.725483C15.9644 0.326839 16.607 0.326839 16.9989 0.725483L23.2846 7.11995C23.4684 7.30697 23.5714 7.55872 23.5714 7.82096L23.5714 17C23.5714 17.5523 23.1237 18 22.5714 18H10C9.44772 18 9 17.5523 9 17L9 7.82096Z"
        fill="url(#paint0_linear_124_580)"
      />
      <g filter="url(#filter0_b_124_580)">
        <path
          d="M1.79815e-07 11.821C6.45758e-08 11.5587 0.103016 11.307 0.286855 11.1199L6.57257 4.72548C6.96444 4.32684 7.607 4.32684 7.99886 4.72548L14.2846 11.1199C14.4684 11.307 14.5714 11.5587 14.5714 11.821L14.5714 21C14.5714 21.5523 14.1237 22 13.5714 22H1.00001C0.447721 22 4.45607e-06 21.5523 4.21338e-06 21L1.79815e-07 11.821Z"
          fill="url(#paint1_linear_124_580)"
          fillOpacity="0.4"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_124_580"
          x="-3"
          y="1.42627"
          width="20.5713"
          height="23.5737"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_124_580"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_124_580"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_124_580"
          x1="11.4286"
          y1="1.5"
          x2="22.7836"
          y2="14.5222"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B446EE" />
          <stop offset="1" stopColor="#FFE001" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_124_580"
          x1="13.2863"
          y1="5.3282"
          x2="0.0472926"
          y2="6.04706"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBC7FF" />
          <stop offset="1" stopColor="#EECFFF" stopOpacity="0.32" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HomeIcon;
