export const GLOT_URL = (language: string) => {
  return `https://glot.io/api/run/${
    language == "py" ? "python" : language
  }/latest`;
};
