
import * as ReactNative from "react-native";

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

type NamedStyles<T> = { [P in keyof T]: ReactNative.ViewStyle | ReactNative.TextStyle | ReactNative.ImageStyle | StringifiedStyles };

export namespace ScaledSheet {
  function create<T extends NamedStyles<T>>(stylesObject: T): { [P in keyof T]: ReactNative.RegisteredStyle<T[P]> | StyleProp<ViewStyle> };
}

export function scaleHorizontal(value: number): number;
export function scaleVertical(value: number): number;
export function scaleSmart(value: number): number;