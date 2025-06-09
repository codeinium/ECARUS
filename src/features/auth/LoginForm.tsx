import { FC, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../shared/ui/Button';
import styles from './LoginForm.module.scss';
import { httpClient } from '../../shared/api/http-client';
import { API_ENDPOINTS } from '../../shared/config/api';
import { useNavigate } from 'react-router-dom';

interface LoginValues {
  email: string;
  password: string;
}

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  password: Yup.string().min(6, 'Минимум 6 символов').required('Обязательное поле'),
});

export const LoginForm: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setError(null);
        try {
          const response = await httpClient.post(API_ENDPOINTS.auth.login, values);
          const { accessToken, refreshToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          navigate('/');
        } catch (e: any) {
          setError(e?.response?.data?.message || 'Ошибка авторизации');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Вход</h2>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" autoComplete="username" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Пароль</label>
            <Field type="password" name="password" id="password" autoComplete="current-password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <Button type="submit" size="large" fullWidth isLoading={isSubmitting}>
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
}; 