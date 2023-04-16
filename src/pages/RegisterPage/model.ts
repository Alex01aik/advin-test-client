import { makeAutoObservable } from 'mobx';
import { query } from '../../utils';
import authService from '../../services/authService';
import historyService from '../../services/historyService';

export const roles = ['user', 'company'];

export type UserCredsType = {
  email: string;
  password: string;
};

export type UserRoleType = {
  role: (typeof roles)[number];
};

export type CompanyDataType = {
  name: string;
  file: FileList;
};

export type UserDataType = Partial<UserCredsType & UserRoleType>;

class RegisterPageModel {
  private steps = ['creds', 'role', 'company'];
  private userData: UserDataType | null = null;
  currentStep = this.steps[0];

  constructor() {
    makeAutoObservable(this);
  }

  resetSteps() {
    this.currentStep = this.steps[0];
  }

  prevStep = () => {
    const index = this.steps.findIndex((item) => item === this.currentStep);
    this.currentStep = this.steps[index - 1];
  };

  nextStep = () => {
    const index = this.steps.findIndex((item) => item === this.currentStep);
    this.currentStep = this.steps[index + 1];
  };

  setCreds = (data: UserCredsType) => {
    this.userData = { ...data };
    this.nextStep();
  };

  setRole = async (data: UserRoleType) => {
    this.userData = { ...this.userData, ...data };
    switch (data.role) {
      case 'company':
        this.nextStep();
        break;
      case 'user':
      default:
        await this.register();
        break;
    }
  };

  setCompanyData = async (data: CompanyDataType) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('file', data.file[0]);

    Object.entries(this.userData!).map(([key, value]) => {
      formData.append(key, value);
    });

    await fetch(`${process.env.REACT_APP_SERVER_URL}register`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        this.auth(res.isAuth);
      })
      .catch((error) => console.error(error));
  };

  register = async () => {
    const res = await query('register', this.userData, 'POST');
    this.auth(res.isAuth);
  };

  private auth(isAuth: boolean) {
    if (isAuth) {
      authService.setAuth();
      this.resetSteps();
      historyService.go('/dashboard');
    }
  }
}

export default new RegisterPageModel();
