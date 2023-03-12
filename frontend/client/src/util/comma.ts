export const autoComma = (data: string) => {
  const num = data.replace(/[^\d]+/g, '');
  const result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return result;
};
