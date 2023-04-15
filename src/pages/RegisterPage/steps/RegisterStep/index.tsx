import React from 'react';
import { observer } from 'mobx-react-lite';
import RegisterForm from '../../../../components/RegisterForm';
import { UserCredsType } from '../../model';

export type RegisterStepProps = { setData: (data: UserCredsType) => void };

const RegisterStep: React.FC<RegisterStepProps> = (props) => {
  return <RegisterForm onSubmit={props.setData} />;
};

export default observer(RegisterStep);
