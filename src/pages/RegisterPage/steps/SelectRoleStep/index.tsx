import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../../../../components/AuthForm/styles.module.css';
import formStyles from './styles.module.css';
import { UserRoleType, roles } from '../../model';
import StepWrapper from '../StepWrapper';

export type SelectRoleStepProps = {
  setData: (data: UserRoleType) => void;
  prevStep: () => void;
};

const SelectRoleStep: React.FC<SelectRoleStepProps> = (props) => {
  return (
    <StepWrapper prevStep={() => props.prevStep()}>
      <div className={styles.form}>
        <h2 className={styles.label}>Select role</h2>
        <div className={styles.inputBlock}>
          <div className={formStyles.buttons}>
            {roles.map((role) => (
              <button key={role} className={formStyles.button} onClick={() => props.setData({ role })}>
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </StepWrapper>
  );
};

export default observer(SelectRoleStep);
