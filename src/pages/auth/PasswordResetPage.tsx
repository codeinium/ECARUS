import { FC } from 'react';
import { PasswordResetForm } from '../../features/auth/PasswordResetForm';
import styles from './LoginPage.module.scss';

export const PasswordResetPage: FC = () => (
  <div className={styles.loginPage}>
    <PasswordResetForm />
  </div>
);

export default PasswordResetPage; 