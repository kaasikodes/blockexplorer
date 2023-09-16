export const shortenText = (props: {
  text?: string;
  maxCharacters?: number;
}): string => {
  const { text = "", maxCharacters = 12 } = props;
  if (text.length <= maxCharacters) {
    return text;
  } else {
    return text.slice(0, maxCharacters) + "...";
  }
};

export const hexToDecimal = (hex?: string): number => parseInt(hex ?? "", 16);
export const hexToString = (hex?: string): string =>
  parseInt(hex ?? "", 16).toString();

export const nullToUndefined = <T>(
  value: null | undefined | T
): T | undefined => {
  if (value === null) {
    return undefined;
  }
  return value;
};
