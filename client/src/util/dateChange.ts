export const dateChange = (date: string) => {
  const result = date ? new Date(date).toISOString().substring(0, 10) : '';
  return result;
};
