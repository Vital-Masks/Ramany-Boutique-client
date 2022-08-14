export const setAuth = (user) => {
  // let userObj = {
  // 	auth: true,
  // 	role: user.role,
  // };
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
  localStorage.removeItem('user');
};
