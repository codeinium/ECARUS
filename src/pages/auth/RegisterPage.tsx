import { FC } from 'react';
import { RegisterForm } from '../../features/auth/RegisterForm';
import styles from './LoginPage.module.scss';

export const RegisterPage: FC = () => (
  <div className={styles.loginPage}>
    <RegisterForm />
  </div>
);

export default RegisterPage; 