const primaryFont = "Roboto-Regular";
const secondaryFont = "Roboto-Bold";

const primary = "#EBF1FF";
const black = "#333333";
const secondary = "#215EE9";
const gray = "#7D8790";
const white = "#FFFF";
const ligthGray = "#f7f7f7";

const fontWeight = [700, 900];
const fontSize = [10, 12, 15, 19, 30, 35, 46, 52];
const height = [0.25, 1.5, 20, 24, 35, 52, 100];
const width = [
  1.5, 2, 10, 17, 70, 100, 110, 150, 200, 250, 399, 419, 474, 521, 600, 804,
  1280, 1110,
];

const spacing = [
  0, 3.5, 5, 6, 10, 11, 12, 15, 18, 20, 22, 26, 27, 30, 32, 40, 42, 84, 98, 664,
  1174, 122, 138,
];
const index = [-1, 1, 2, 3, 20];
const breakpoints = {
  xs: [360, 400, 500],
  lg: [1074, 1100],
  xl: [1200, 1300],
};

export const theme = {
  colors: { primary, secondary, black, gray, white, ligthGray },
  spacing,
  primaryFont,
  secondaryFont,
  breakpoints,
  fontWeight,
  fontSize,
  height,
  width,
  index,
};
