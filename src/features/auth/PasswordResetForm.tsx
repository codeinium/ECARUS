import { FC } from 'react';
import styles from './LoginForm.module.scss';

export const PasswordResetForm: FC = () => {
  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Сброс пароля</h2>
      <div className={styles.success}>
        Сброс пароля возможен только для пользователя <b>test@kosipov.ru</b> (ограничение тестового API).
        Проверьте почту для получения ссылки на сброс.
      </div>
    </div>
  );
}; 