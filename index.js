import { StyleSheet } from "react-native";

const Config = {
  deviceWidth: 375,
  baseWidth: 375,
  maxScale: 1.3,
  minScale: 0.8,
  scale: function (value) {
    const ratio = this.deviceWidth / this.baseWidth;
    return value * Math.min(Math.max(ratio, this.minScale), this.maxScale);
  },
};

const propsToUpdate = [
  "height",
  "fontSize",
  "letterSpacing",
  "lineHeight",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderRadius",
  "borderBottomWidth",
  "borderTopWidth",
  "borderRightWidth",
  "borderLeftWidth",
  "borderWidth",
  "shadowRadius",
  "borderWidth",
  "translateX",
  "translateY",
  "marginLeft",
  "marginRight",
  "marginHorizontal",
  "marginVertical",
  "marginTop",
  "marginBottom",
  "margin",
  "paddingLeft",
  "paddingRight",
  "paddingHorizontal",
  "paddingVertical",
  "padding",
  "paddingTop",
  "paddingBottom",
  "top",
  "left",
  "bottom",
  "right",
];

export class ScaledSheet {
  static scale = (value) => Config.scale(value);

  static initialize = (config) => {
    const { baseWidth, maxScale, minScale, deviceWidth } = config;
    Config.deviceWidth = deviceWidth || Config.deviceWidth;
    Config.maxScale = maxScale || Config.maxScale;
    Config.minScale = minScale || Config.minScale;
    Config.baseWidth = baseWidth || Config.baseWidth;
  };

  static mapObj = (o) => {
    const res = {};
    Object.keys(o).forEach((objKey) => {
      // map
      const obj = o[objKey];
      const resultObj = {};
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (typeof value === "number" && propsToUpdate.includes(key)) {
          resultObj[key] = Config.scale(value);
        } else if (typeof value === "string") {
          resultObj[key] = isNaN(value) ? value : parseFloat(value);
        } else {
          resultObj[key] = value;
        }
      });
      res[objKey] = resultObj;
    });
    return res;
  };

  static create = (obj) => {
    return StyleSheet.create(ScaledSheet.mapObj(obj));
  };
}
