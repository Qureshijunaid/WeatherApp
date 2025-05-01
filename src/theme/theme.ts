import { color } from "./color";

export const lightTheme = {
  background: color.primary.white,
  text: color.primary.black,
  buttonBackground: color.primary.black,
  buttonText: color.primary.white,
  gradienBackground: ["#0F2027", "#203A43", "#2C5364"],
};

export const darkTheme = {
  background: color.primary.black,
  text: color.primary.white,
  buttonBackground: color.primary.white,
  buttonText: color.primary.black,
  gradienBackground: ["#E3F2FD", "#BBDEFB", "#90CAF9"],
};
