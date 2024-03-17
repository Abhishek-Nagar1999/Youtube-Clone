export const formatText = (text) => {
  if (text.length > 100) {
    return text.slice(0, 100).concat("...");
  } else {
    return text;
  }
};

export const formatNumber = (number) => {
  if (number >= 1000000) {
    const millions = (number / 1000000).toFixed(2);
    return `${millions}M`;
  } else if (number >= 1000) {
    const thousand = Math.floor(number / 1000);
    return `${thousand}K`;
  } else if (number >= 100) {
    const hundred = Math.floor(number / 100);
    return `${hundred}`;
  }
  return number?.toString();
};
