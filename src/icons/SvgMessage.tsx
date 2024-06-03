/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const defaultProps = {
  strokeFill: '#070C18',
  width: 24,
  height: 24,
  fill: 'red',
  strokeFillOne: '#ffffff',
  isCircle: false,
};
const SvgMessage = ({
  strokeFill,
  width,
  height,
  fill,
  strokeFillOne,
  isCircle,
}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
    <Path
      d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
      stroke={strokeFill}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      fill={fill}
      strokeLinejoin="round"
    />
    <Path
      d="M7 8h10M7 13h6"
      stroke={strokeFillOne}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill}
    />
    {isCircle && <Circle cx={20} cy={4} r={4} fill="#FF4D5E" />}
  </Svg>
);

SvgMessage.defaultProps = defaultProps;

export default SvgMessage;
