export const setAuth = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getAuth = () => {
  if (typeof window !== 'undefined') {
    let authObj = JSON.parse(localStorage.getItem('user'));
    if (authObj) {
      return authObj;
    } else {
      return false;
    }
  }
};

export const isLoggedIn = () => {
  return Boolean(getAuth());
};

export const removeAuth = () => {
  localStorage.clear();
};
