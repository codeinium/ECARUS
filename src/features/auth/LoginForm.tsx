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

const CLIENT_ID = 'web'; // TODO: вынести в .env
const CLIENT_SECRET = 'secret'; // TODO: вынести в .env
const SCOPE = '*';

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
          const payload = {
            grant_type: 'password',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            username: values.email,
            password: values.password,
            scope: SCOPE,
          };
          const response = await httpClient.post(API_ENDPOINTS.auth.login, payload);
          const { access_token, refresh_token } = response.data;
          localStorage.setItem('accessToken', access_token);
          localStorage.setItem('refreshToken', refresh_token);
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