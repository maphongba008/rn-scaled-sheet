import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface StringifiedStyles {
  fontSize?: string | number;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  borderBottomLeftRadius?: string | number;
  borderBottomRightRadius?: string | number;
  borderTopLeftRadius?: string | number;
  borderTopRightRadius?: string | number;
  borderBottomWidth?: string | number;
  borderTopWidth?: string | number;
  borderRightWidth?: string | number;
  borderLeftWidth?: string | number;
  borderRadius?: string | number;
  shadowRadius?: string | number;
  borderWidth?: string | number;
  translateX?: string | number;
  translateY?: string | number;
}


type Config = {
  baseWidth?: number;
  deviceWidth?: number;
  maxScale?: number;
  minScale?: number;
};

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle | StringifiedStyles };

export namespace ScaledSheet {
  function create<T extends NamedStyles<T> | NamedStyles<any>>(styles: T | NamedStyles<T>): T;
  function initialize(config: Config): void;
  function scale(value: number): number;
}