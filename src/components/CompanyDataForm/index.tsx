import React from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';
import styles from '../AuthForm/styles.module.css';
import formStyles from './styles.module.css';
import { CompanyDataType } from '../../pages/RegisterPage/model';

export type CompanyDataFormProps = {
  onSubmit: (data: CompanyDataType) => void;
  prevStep: () => void;
};

const CompanyDataForm: React.FC<CompanyDataFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyDataType>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className={styles.form}>
      <label className={styles.inputBlock}>
        Company name
        <input {...register('name')} className={styles.input} />
        {errors.name && <span className={styles.error}>{errors.name.message?.toString()}</span>}
      </label>
      <label>
        Upload File:
        <input type="file" {...register('file')} />
        {errors.file && <span className={styles.error}>{errors.file.message?.toString()}</span>}
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default observer(CompanyDataForm);
