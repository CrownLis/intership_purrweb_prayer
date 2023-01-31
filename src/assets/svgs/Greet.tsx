import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';
import { memo } from 'react';
const SvgGreet = (props: SvgProps) => (
  <Svg width={186} height={185} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipPath="url(#Greet_svg__a)">
      <Path
        opacity={0.6}
        d="M80.751 11.622c6.867-6.515 17.631-6.515 24.498 0l7.113 6.75a17.795 17.795 0 0 0 13.334 4.853l9.787-.598c9.448-.578 17.694 6.342 18.766 15.746l1.111 9.743a17.794 17.794 0 0 0 7.095 12.289l7.882 5.833c7.608 5.63 9.477 16.231 4.254 24.125l-5.412 8.177a17.795 17.795 0 0 0-2.464 13.974l2.289 9.535c2.209 9.204-3.174 18.526-12.249 21.215l-9.402 2.786a17.793 17.793 0 0 0-10.87 9.121l-4.376 8.775c-4.223 8.471-14.339 12.152-23.019 8.379l-8.993-3.91a17.799 17.799 0 0 0-14.19 0l-8.993 3.91c-8.68 3.773-18.796.092-23.02-8.379l-4.375-8.775a17.792 17.792 0 0 0-10.87-9.121l-9.402-2.786c-9.075-2.689-14.458-12.011-12.248-21.215l2.288-9.535a17.795 17.795 0 0 0-2.464-13.974l-5.412-8.177c-5.223-7.894-3.354-18.495 4.254-24.125l7.882-5.833a17.795 17.795 0 0 0 7.095-12.29l1.11-9.742c1.073-9.404 9.32-16.324 18.767-15.746l9.787.598c4.925.3 9.755-1.457 13.334-4.853l7.113-6.75Z"
        fill="url(#Greet_svg__b)"
      />
      <Path
        d="M86.028 44.682a10.571 10.571 0 0 1 14.553 0l4.226 4.01a10.57 10.57 0 0 0 7.921 2.883l5.814-.356a10.57 10.57 0 0 1 11.148 9.355l.66 5.788a10.573 10.573 0 0 0 4.215 7.3l4.682 3.465a10.57 10.57 0 0 1 2.527 14.332l-3.214 4.857a10.571 10.571 0 0 0-1.464 8.302l1.359 5.664a10.57 10.57 0 0 1-7.276 12.603l-5.585 1.655a10.572 10.572 0 0 0-6.458 5.418l-2.599 5.213a10.571 10.571 0 0 1-13.675 4.978l-5.343-2.323a10.578 10.578 0 0 0-8.43 0l-5.341 2.323a10.572 10.572 0 0 1-13.675-4.978l-2.6-5.213a10.573 10.573 0 0 0-6.457-5.418l-5.585-1.655a10.57 10.57 0 0 1-7.277-12.603l1.36-5.664a10.571 10.571 0 0 0-1.464-8.302l-3.215-4.857a10.571 10.571 0 0 1 2.527-14.332l4.682-3.465a10.571 10.571 0 0 0 4.215-7.3l.66-5.788a10.571 10.571 0 0 1 11.148-9.355l5.815.356a10.572 10.572 0 0 0 7.92-2.883l4.226-4.01Z"
        fill="#fff"
      />
      <Path
        opacity={0.8}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.146 73.236c-1.141.983-1.714 2.53-2.801 7.561-.752 3.48-1.98 7.878-2.731 9.775l-1.364 3.45-4.281.288-4.28.287V111.272l3.024.174c2.317.133 3.106-.035 3.368-.719.268-.699 1.296-.893 4.737-.895 3.461-.002 4.823-.261 6.407-1.222 1.107-.671 2.207-1.511 2.444-1.867.32-.478.544-.478.863 0 .237.356 1.337 1.196 2.443 1.867 1.585.961 2.947 1.22 6.407 1.222 3.441.002 4.469.196 4.738.895.262.684 1.051.852 3.368.719l3.025-.174V94.597l-4.281-.287-4.281-.288-1.364-3.45c-.751-1.897-1.98-6.296-2.731-9.775C99.154 72.922 98.341 72 93.1 72c-2.773 0-3.823.262-4.954 1.236Zm3.23 15.943v13.844l-1.681 1.681c-1.562 1.561-1.99 1.68-6.038 1.68h-4.356v-4.312c0-4.163.047-4.312 1.373-4.312.756 0 1.91-.453 2.565-1.007 1.497-1.265 4.326-9.046 5.546-15.251 1.143-5.814 1.257-6.167 1.998-6.167.39 0 .592 4.717.592 13.844Zm5.881-8.34c1.376 6.857 4.347 15.046 5.836 16.088.653.458 1.777.833 2.498.833 1.246 0 1.309.208 1.309 4.312v4.312h-4.357c-4.048 0-4.475-.119-6.037-1.68l-1.68-1.681V89.131c0-10.668.162-13.837.7-13.658.386.128 1.165 2.543 1.731 5.366Z"
        fill="url(#Greet_svg__c)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="Greet_svg__b"
        x1={-53.714}
        y1={-28.307}
        x2={-58.684}
        y2={338.797}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FE650F" />
        <Stop offset={1} stopColor="#FFF500" stopOpacity={0.031} />
      </LinearGradient>
      <LinearGradient id="Greet_svg__c" x1={60.659} y1={65.945} x2={59.63} y2={144.464} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FE650F" />
        <Stop offset={1} stopColor="#FFF500" stopOpacity={0.031} />
      </LinearGradient>
      <ClipPath id="Greet_svg__a">
        <Path fill="#fff" transform="translate(.688)" d="M0 0h184.624v184.624H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const Memo = memo(SvgGreet);
export default Memo;