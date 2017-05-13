import createTheme from "spectacle/lib/themes/default";

import { navy, white, ivy, snow, sky, mint, marine, delta, darth, dover } from './colors';
import { fontFamily, fallback } from './fonts';

const theme = createTheme({
  primary: navy.toString(),
  secondary: mint.toString(),
  tertiary: white.toString(),
  quartenary: marine.toString()
}, {
  primary: { name: fontFamily + ', ' + fallback, styles: [ 'normal', 'bold' ] },
  secondary: { name: fontFamily + ', ' + fallback, styles: [ 'normal', 'bold' ] }
});

export default theme;
