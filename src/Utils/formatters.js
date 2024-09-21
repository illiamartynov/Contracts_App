export const formatNumberWithSpaces = (value) => {
  return new Intl.NumberFormat('ru-RU').format(value);
};
