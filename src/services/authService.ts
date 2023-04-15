import { makeAutoObservable } from 'mobx';

class AuthService {
  constructor() {
    makeAutoObservable(this);
  }

  isAuth = (): boolean => {
    return Boolean(localStorage.getItem('isAuth'));
  };

  setAuth = () => {
    localStorage.setItem('isAuth', 'true');
  };

  logout = () => {
    localStorage.removeItem('isAuth');
  };
}

export default new AuthService();
