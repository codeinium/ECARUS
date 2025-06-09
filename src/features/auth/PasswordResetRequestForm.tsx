import { FC, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../shared/ui/Button';
import { httpClient } from '../../shared/api/http-client';
import { API_ENDPOINTS } from '../../shared/config/api';
import styles from './LoginForm.module.scss';

interface PasswordResetRequestValues {
  email: string;
}

const initialValues: PasswordResetRequestValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
});

export const PasswordResetRequestForm: FC = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setError(null);
        setSuccess(false);
        try {
          await httpClient.post(API_ENDPOINTS.forgot, values);
          setSuccess(true);
        } catch (e: any) {
          setError(e?.response?.data?.message || 'Ошибка отправки запроса');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Восстановление пароля</h2>
          {success && <div className={styles.success}>Письмо с инструкцией отправлено на ваш email</div>}
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" autoComplete="username" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <Button type="submit" size="large" fullWidth isLoading={isSubmitting} disabled={success}>
            Отправить ссылку
          </Button>
        </Form>
      )}
    </Formik>
  );
}; 