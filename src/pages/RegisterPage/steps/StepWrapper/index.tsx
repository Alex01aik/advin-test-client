import React from 'react';
import styles from './styles.module.css';

export type StepWrapperProps = {
  prevStep: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const StepWrapper: React.FC<StepWrapperProps> = ({ children, ...props }) => {
  return (
    <div>
      <span className={styles.link} onClick={props.prevStep}>
        go to prev step
      </span>
      {children}
    </div>
  );
};

export default StepWrapper;
