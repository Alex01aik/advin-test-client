import { makeAutoObservable } from 'mobx';
import { query } from '../../utils';
import AuthService from '../../services/authService';
import HistoryService from '../../services/historyService';
import { UserCredsType } from '../RegisterPage/model';

class LoginPageModel {
  private authStore;
  private historyService;

  constructor() {
    makeAutoObservable(this);
    this.authStore = AuthService;
    this.historyService = HistoryService;
  }

  login = async (data: UserCredsType) => {
    const res = await query('login', data, 'POST');
    if (res.isAuth) {
      this.authStore.setAuth();
      this.historyService.go('/dashboard');
    }
  };
}

export default new LoginPageModel();
