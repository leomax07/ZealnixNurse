/* eslint max-len: ["error", { "code": 4000 }] */
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  fill: '#FF4C5E',
  width: 14,
  height: 16,
};
const SvgTrash = ({fill, width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 14 16">
    <Path
      d="M2.836 15.5c-.458 0-.85-.163-1.177-.49a1.605 1.605 0 0 1-.49-1.177V3a.808.808 0 0 1-.594-.24.808.808 0 0 1-.24-.593c0-.236.08-.434.24-.594.16-.16.358-.24.594-.24h3.334c0-.236.08-.434.24-.594C4.902.58 5.1.5 5.336.5h3.333c.236 0 .434.08.594.24.16.16.24.357.24.593h3.333c.236 0 .434.08.593.24.16.16.24.358.24.594s-.08.434-.24.594a.806.806 0 0 1-.593.239v10.833c0 .459-.163.851-.49 1.178-.326.326-.718.489-1.177.489H2.836Zm0-12.5v10.833h8.333V3H2.836Zm1.667 8.333c0 .236.08.434.24.594.159.16.357.24.593.24s.434-.08.594-.24c.16-.16.24-.358.24-.594V5.5a.808.808 0 0 0-.24-.594.808.808 0 0 0-.594-.24.806.806 0 0 0-.593.24.807.807 0 0 0-.24.594v5.833Zm3.333 0c0 .236.08.434.24.594.16.16.357.24.593.24s.434-.08.594-.24c.16-.16.24-.358.24-.594V5.5a.808.808 0 0 0-.24-.594.808.808 0 0 0-.594-.24.806.806 0 0 0-.593.24.807.807 0 0 0-.24.594v5.833Z"
      fill={fill}
    />
  </Svg>
);
SvgTrash.defaultProps = defaultProps;

export default SvgTrash;
