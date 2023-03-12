export const tokenCheck = (): boolean => {
  return localStorage.getItem('access_token') ? true : false;
};

export const tokendelete = (): void => {
  localStorage.clear();
  location.replace('/main');
};
