import { StyleSheet, Dimensions } from 'react-native';

const BASE_WIDTH = 375;
const BASE_HEIGHT = 667;

const { width, height } = Dimensions.get('window');

const scaleX = width / BASE_WIDTH;
const scaleY = height / BASE_HEIGHT;

const scale = Math.min(scaleX, scaleY, 1.3);

const propsToUpdate = [
  'width',
  'height',
  'fontSize',
  'letterSpacing',
  'lineHeight',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderRadius',
  'borderBottomWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderLeftWidth',
  'borderWidth',
  'shadowRadius',
  'borderWidth',
  'translateX',
  'translateY',
  'marginLeft',
  'marginRight',
  'marginHorizontal',
  'marginVertical',
  'margin',
  'paddingLeft',
  'paddingRight',
  'paddingHorizontal',
  'paddingVertical',
  'padding',
  'top',
  'left',
  'bottom',
  'right',
]

export class ScaledSheet {

  static map = (obj) => {
    const res = {};
    Object.keys(obj).forEach(key => {
      const mapStyleObj = {};
      const styleObject = obj[key];
      Object.keys(obj[key]).forEach(t => {
        if (propsToUpdate.indexOf(t) > -1) {
          if (typeof styleObject[t] === 'number') {
            mapStyleObj[t] = styleObject[t] * scale;
          } else if (typeof styleObject[t] === 'string' && styleObject[t].match(/^-{0,1}\d+\.?\d+$/)) {
            mapStyleObj[t] = parseInt(styleObject[t]);
          } else {
            mapStyleObj[t] = styleObject[t];
          }
        } else {
          mapStyleObj[t] = styleObject[t];
        }
      });
      res[key] = mapStyleObj;
    })
    return res;
  }

  static create = obj => StyleSheet.create(ScaledSheet.map(obj));
}

export const scaleHorizontal = value => value * scaleX;
export const scaleVertical = value => value * scaleY;
export const scaleSmart = value => value * scale;