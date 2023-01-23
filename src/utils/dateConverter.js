export const dateConverter = (strDate) => {
  const dateArr = strDate?.split("-");
  (dateArr[2].charAt(0));
  const dayOne = dateArr != null || undefined ? dateArr[2].charAt(0) : "";
  const dayTwo = dateArr != null || undefined ? dateArr[2].charAt(1) : "";
  return (dateArr[1] + "-" + dayOne + dayTwo + "-" + dateArr[0]);
};
