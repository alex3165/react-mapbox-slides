import createTheme from "spectacle/lib/themes/default";

import { navy, white, ivy, snow, sky, mint, marine, delta } from './colors';
import { fontFamily, fallback } from './fonts';

const theme = createTheme({
  primary: marine.toString(),
  secondary: mint.toString(),
  tertiary: snow.toString(),
  quartenary: mint.lighten(0.4).toString()
}, {
  primary: { name: fontFamily + ', ' + fallback, styles: [ 'normal', 'bold' ] },
  secondary: { name: fontFamily + ', ' + fallback, styles: [ 'normal', 'bold' ] }
});

export default theme;
