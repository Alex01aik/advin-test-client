import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../styles.module.css';
import authService from '../../services/authService';
import { useHistory } from 'react-router-dom';

export type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  const history = useHistory();
  return (
    <div className={styles.page}>
      <span>Congratulations! You are logined</span>
      <button
        onClick={() => {
          authService.logout();
          history.push('/login');
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default observer(Dashboard);
