import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
import { memo } from 'react';
const SvgPrayArms = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipPath="url(#pray-arms_svg__a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.362 1.853c-.378.325-.567.837-.927 2.5-.248 1.15-.654 2.605-.903 3.233l-.45 1.14-1.416.096-1.416.095v5.514l1 .057c.766.044 1.027-.011 1.114-.237.089-.231.429-.296 1.567-.296 1.144 0 1.594-.087 2.118-.405.366-.221.73-.5.808-.617.106-.158.18-.158.286 0 .078.118.442.396.808.617.524.318.974.404 2.118.405 1.138 0 1.478.065 1.567.296.087.226.348.281 1.114.237l1-.057V8.917l-1.416-.095-1.415-.095-.451-1.141c-.248-.628-.655-2.082-.903-3.233C11.002 1.75 10.733 1.444 9 1.444c-.917 0-1.264.087-1.638.409ZM8.43 7.125v4.578l-.556.556c-.517.516-.658.556-1.997.556h-1.44v-1.426c0-1.377.015-1.426.454-1.426.25 0 .631-.15.848-.333.495-.419 1.43-2.992 1.834-5.044.378-1.922.416-2.039.66-2.039.13 0 .197 1.56.197 4.578Zm1.945-2.758c.455 2.268 1.437 4.975 1.93 5.32.216.152.587.276.825.276.412 0 .433.068.433 1.426v1.426h-1.44c-1.34 0-1.48-.04-1.997-.556l-.556-.556V7.11c0-3.528.054-4.576.232-4.516.128.042.385.84.573 1.774Z"
        fill={props.fill}
      />
    </G>
    <Defs>
      <ClipPath id="pray-arms_svg__a">
        <Path fill="#fff" transform="rotate(90 9 9)" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const Memo = memo(SvgPrayArms);
export default Memo;