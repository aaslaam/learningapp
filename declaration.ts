declare module '*.svg' {
  import * as React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
// declarations.d.ts
declare module 'react-native-progress/Bar' {
  import { ComponentType } from 'react';
  import { ViewStyle } from 'react-native';

  interface BarProps {
    progress: number;
    width?: number;
    height?: number;
    color?: string;
    unfilledColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    style?: ViewStyle;
  }

  const Bar: ComponentType<BarProps>;
  export default Bar;
}
