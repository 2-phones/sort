export const getDate = () => {
  const createDate = new Date();
  const expiredDate = new Date(createDate.setDate(createDate.getDate() + 14));

  return expiredDate;
};
