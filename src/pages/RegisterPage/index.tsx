import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../styles.module.css';
import RegisterStep from './steps/RegisterStep';
import SelectRoleStep from './steps/SelectRoleStep';
import CompanyDataStep from './steps/CompanyDataStep';
import model from './model';

export type RegisterPageProps = {};

const RegisterPage: React.FC<RegisterPageProps> = () => {
  useEffect(() => {}, [model.currentStep]);

  const Steps = () => {
    switch (model.currentStep) {
      case 'role':
        return (
          <SelectRoleStep
            key="selectRole"
            setData={async (data) => await model.setRole(data)}
            prevStep={() => model.prevStep()}
          />
        );
      case 'company':
        return (
          <CompanyDataStep
            key="companyData"
            setData={async (data) => await model.setCompanyData(data)}
            prevStep={() => model.prevStep()}
          />
        );
      case 'creds':
      default:
        return <RegisterStep key="register" setData={(data) => model.setCreds(data)} />;
    }
  };

  return (
    <div className={styles.page}>
      <Steps />
    </div>
  );
};

export default observer(RegisterPage);
