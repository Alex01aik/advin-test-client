import React from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';
import styles from '../AuthForm/styles.module.css';
import { Link } from 'react-router-dom';
import { UserCredsType } from '../../pages/RegisterPage/model';

export type RegisterFormProps = {
  onSubmit: (data: UserCredsType) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredsType>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className={styles.form}>
      <h2 className={styles.label}>Register</h2>
      <label className={styles.inputBlock}>
        Email
        <input {...register('email')} className={styles.input} />
        {errors.email && <span className={styles.error}>{errors.email.message?.toString()}</span>}
      </label>

      <label className={styles.inputBlock}>
        Password
        <input type="password" {...register('password')} className={styles.input} />
        {errors.password && <span className={styles.error}>{errors.password.message?.toString()}</span>}
      </label>

      <button type="submit">Register</button>
      <Link to="/login" style={{ width: '100%' }}>
        <button className={styles.redirectButton}>I already have an accaunt</button>
      </Link>
    </form>
  );
};

export default observer(RegisterForm);
