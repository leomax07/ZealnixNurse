/* eslint max-len: ["error", { "code": 4000 }] */
import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

const defaultProps = {
  fill: '#5CD588',
  width: 12,
  height: 12,
};
const SvgDot = ({fill, width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 12 12">
    <Circle cx={6} cy={6} r={5.5} fill={fill} stroke="#fff" />
  </Svg>
);
SvgDot.defaultProps = defaultProps;

export default SvgDot;
