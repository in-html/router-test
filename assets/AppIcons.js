import { PixelRatio } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/iconFontConfig/selection.json';
const Icons = createIconSetFromIcoMoon(icoMoonConfig);

const icons = {
  shop: [23, '#E4002B'],
  compass: [28, '#E4002B'],
  'food_pre-order': [28, '#E4002B'],
  info: [23, '#E4002B'],
  clock: [28, '#E4002B'],
  human_dollar: [28, '#E4002B'],
  dollar: [28, '#E4002B'],
  heart_o: [28, '#E4002B'],
  plus: [28, '#E4002B'],
  arrow_left: [20, '#E4002B'],
  chevron_down: [28, '#E4002B'],
  chevron_right: [28, '#E4002B'],
  cart: [28, '#E4002B'],
  cross: [28, '#E4002B'],
  minus: [28, '#E4002B'],
  hamburger: [28, '#E4002B'],
  hamburger_wide: [25, '#E4002B'],
  list: [20, '#E4002B'],
  map: [22.5, '#E4002B'],
  menu: [28, '#E4002B'],
  card_discount: [28, '#E4002B'],
  edit: [22, '#E4002B'],
  pin: [28, '#E4002B'],
  pin_2: [28, '#E4002B'],
  process: [28, '#E4002B'],
  ready: [28, '#E4002B'],
  search: [23, '#E4002B'],
  shopping_bag: [28, '#E4002B'],
  star_o: [28, '#E4002B'],
  star: [28, '#E4002B'],
  plus_circle: [28, '#E4002B'],
  check_circle: [28, '#E4002B'],
  pizza: [28, '#E4002B'],
  human: [28, '#E4002B'],
  image_place: [28, '#E4002B'],
  image: [28, '#E4002B'],
  user: [28, '#E4002B'],
};
const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      // IconName--suffix--other-suffix is just the mapping name in iconsMap
      let image = Icons.getImageSource(
        iconName,
        icons[iconName][0],
        icons[iconName][1]
      );
      return image;
    })
  ).then(sources => {
    Object.keys(icons).forEach(
      (iconName, idx) => (iconsMap[iconName] = sources[idx])
    );

    // Call resolve (and we are done)
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };
/*
export const appIcons = [
  Icons.getImageSource('shop', 30, 'red'),
];
 */
