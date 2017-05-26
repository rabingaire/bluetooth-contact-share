const color = require('color');

// theme background
const primary = color('#2C4C87');
// header
const secondary = color('#3B5998');
const info = color('#5890FF');
const success = color('#49BE23');
const danger = color('#d9534f');
const warning = color('#f0ad4e');
const sidebar = color('#49BE23');
const dark = color('rgba(0,0,0,0.8)');
const light = color('rgba(255,255,255,0.8)');

// var darken = secondary.darken(0.2).hexString().toString();

module.exports = {
  brandPrimary: primary.hexString().toString(),
  brandSecondary: secondary.hexString().toString(),
  brandInfo: info.hexString().toString(),
  brandSuccess: success.hexString().toString(),
  brandDanger: danger.hexString().toString(),
  brandWarning: warning.hexString().toString(),
  brandSidebar: sidebar.hexString().toString(),
  // darker: darken,
  dark: dark.hexString().toString(),
  light: light.hexString().toString(),
};
