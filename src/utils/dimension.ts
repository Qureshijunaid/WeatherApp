import { Dimensions, PixelRatio } from "react-native";
//Design Width is coming from width of figma artboard device size
export const DesignWidth = 360;
//Design Height is coming from height of figma artboard device size
export const DesignHeight = 667;

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / DesignWidth;

// normalize is used for responsive font size
export function normalize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}

// it will be used to resposive width of device relative to figma ui
export const vw = (width: number) => {
  const percent = (width / DesignWidth) * 100;
  const elemWidth = parseFloat(percent + "%");
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
// it will be used to resposive height of device relative to figma ui
export const vh = (height: number) => {
  const percent = (height / DesignWidth) * 100;
  const elemHeight = parseFloat(percent + "%");
  return PixelRatio.roundToNearestPixel((screenWidth * elemHeight) / 100);
};

/** fn calculateRotatedDimensions(width, height, rotationAngle) will find the max width
 * and height for the rotated image
 * @param width
 * @param height
 * @param rotationAngle
 */
export const calculateRotatedDimensions = (
  width: number,
  height: number,
  rotationAngle: number
) => {
  // Convert rotation angle from degrees to radians
  const rotationAngleInRadians = (rotationAngle * Math.PI) / 180;

  // Calculate the absolute cosine and sine of the rotation angle
  const absCosAngle = Math.abs(Math.cos(rotationAngleInRadians));
  const absSinAngle = Math.abs(Math.sin(rotationAngleInRadians));

  // Calculate the new width and height after rotation
  const rotatedWidth = width * absCosAngle + height * absSinAngle;
  const rotatedHeight = width * absSinAngle + height * absCosAngle;

  return { rotatedWidth, rotatedHeight };
};
