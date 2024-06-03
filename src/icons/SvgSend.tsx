/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  width: 24,
  height: 24,
  fill: '#3366FF',
};
const SvgSend = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
    <Path
      d="M18.0712 8.51001L9.51124 4.23001C3.76124 1.35001 1.40124 3.71001 4.28124 9.46001L5.15124 11.2C5.40124 11.71 5.40124 12.3 5.15124 12.81L4.28124 14.54C1.40124 20.29 3.75124 22.65 9.51124 19.77L18.0712 15.49C21.9112 13.57 21.9112 10.43 18.0712 8.51001ZM14.8412 12.75H9.44124C9.03124 12.75 8.69124 12.41 8.69124 12C8.69124 11.59 9.03124 11.25 9.44124 11.25H14.8412C15.2512 11.25 15.5912 11.59 15.5912 12C15.5912 12.41 15.2512 12.75 14.8412 12.75Z"
      fill={fill}
    />
  </Svg>
);

SvgSend.defaultProps = defaultProps;

export default SvgSend;
