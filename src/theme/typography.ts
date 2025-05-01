import { color } from "./color";
import { fontSize } from "./fontSize";
import { fontStyle } from "./fontStyle";
import { fontWeight } from "./fontWeight";

export const typography = {
  heading: {
    heading1: {
      fontSize: fontSize.s14,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w400,
      lineHeight: fontSize.s20,
      color: color.text.primary,
    },
    heading2: {
      fontSize: fontSize.s30,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w500,
      lineHeight: fontSize.s52,
      letterSpacing: -0.8,
      color: color.text.primary,
    },
    heading3: {
      fontSize: fontSize.s40,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w500,
      lineHeight: fontSize.s48,
      letterSpacing: -0.8,
      color: color.text.primary,
    },
  },
  subHeading: {
    subHeading1: {
      fontSize: fontSize.s20,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w400,
      lineHeight: fontSize.s32,
      color: color.text.primary,
    },
    subHeading2: {
      fontSize: fontSize.s12,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w500,
      lineHeight: fontSize.s20,
      color: color.text.primary,
    },
    subHeading3: {
      fontSize: fontSize.s20,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w600,
      lineHeight: fontSize.s32,
      color: color.text.primary,
    },
  },

  bodyLarge: {
    regular: {
      fontSize: fontSize.s16,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w400,
      lineHeight: fontSize.s24,
      color: color.text.secondary,
    },
    medium: {
      fontSize: fontSize.s16,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w500,
      lineHeight: fontSize.s24,
      color: color.text.secondary,
    },
    light: {
      fontSize: fontSize.s16,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w300,
      lineHeight: fontSize.s24,
      color: color.text.secondary,
    },
  },
  bodyMedium: {
    regular: {
      fontSize: fontSize.s14,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w400,
      lineHeight: fontSize.s20,
      color: color.text.secondary,
    },
    medium: {
      fontSize: fontSize.s14,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w500,
      lineHeight: fontSize.s20,
      color: color.text.secondary,
    },
    light: {
      fontSize: fontSize.s12,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w300,
      color: color.text.secondary,
    },
  },
  bodySmall: {
    regular: {
      fontSize: fontSize.s12,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w400,
      lineHeight: fontSize.s18,
      color: color.text.secondary,
    },
    medium: {
      fontSize: fontSize.s12,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w500,
      lineHeight: fontSize.s18,
      color: color.text.secondary,
    },
    light: {
      fontSize: fontSize.s12,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w300,
      lineHeight: fontSize.s18,
      color: color.text.secondary,
    },
  },
  bodyExtraSmall: {
    regular: {
      fontSize: fontSize.s10,
      fontStyle: fontStyle.normal,
      fontWeight: fontWeight.w400,
      lineHeight: fontSize.s16,
      color: color.text.secondary,
    },
  },

  placeholderLables: {
    fontSize: fontSize.s14,
    fontStyle: fontStyle.normal,
    fontWeight: fontWeight.w300,
    color: color.text.secondary,
  },
};
