const componentToHex = (color: number): string => {
  const hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export const getRandomHexColor = (): string => {
  const rgb = Array(3)
    .fill(0)
    .map((_) => Math.floor(Math.random() * 256));

  const hexValues = rgb.map((color) => componentToHex(color));
  const hexString = "#" + hexValues.join("").toUpperCase();

  return hexString;
};

export const getRandomHexColors = (num: number) => {
  return Array(num)
    .fill(0)
    .map((_) => getRandomHexColor());
};

export const getRandomIndex = (arrayLength: number) =>
  Math.floor(Math.random() * arrayLength);
