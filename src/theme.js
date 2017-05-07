import createTheme from "spectacle/lib/themes/default";

import { navy, white, fern, snow, sky, mint } from './colors';
import { fontFamily, fallback } from './fonts';

const theme = createTheme({
  primary: fern.toString(),
  secondary: snow.toString(),
  tertiary: snow.toString(),
  quartenary: mint.lighten(0.4).toString()
}, {
  primary: { name: fontFamily + ', ' + fallback, styles: [ 'normal', 'bold' ] },
  secondary: { name: fontFamily + ', ' + fallback, styles: [ 'normal', 'bold' ] }
});

export default theme;
