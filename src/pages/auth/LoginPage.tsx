import { FC } from 'react';
import { LoginForm } from '../../features/auth/LoginForm';
import styles from './LoginPage.module.scss';

export const LoginPage: FC = () => (
  <div className={styles.loginPage}>
    <LoginForm />
  </div>
);

export default LoginPage; 