import { FC } from 'react';
import { PasswordResetRequestForm } from '../../features/auth/PasswordResetRequestForm';
import styles from './LoginPage.module.scss';

export const PasswordResetRequestPage: FC = () => (
  <div className={styles.loginPage}>
    <PasswordResetRequestForm />
  </div>
);

export default PasswordResetRequestPage; 