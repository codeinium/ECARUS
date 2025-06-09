import { FC, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../shared/ui/Button';
import { httpClient } from '../../shared/api/http-client';
import { API_ENDPOINTS } from '../../shared/config/api';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss';

interface RegisterValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: RegisterValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  password: Yup.string().min(6, 'Минимум 6 символов').required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Обязательное поле'),
});

export const RegisterForm: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setError(null);
        try {
          const { confirmPassword, ...payload } = values;
          const response = await httpClient.post(API_ENDPOINTS.auth.register, payload);
          const { accessToken, refreshToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          navigate('/');
        } catch (e: any) {
          setError(e?.response?.data?.message || 'Ошибка регистрации');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Регистрация</h2>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" autoComplete="username" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Пароль</label>
            <Field type="password" name="password" id="password" autoComplete="new-password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <div className={styles.field}>
            <label htmlFor="confirmPassword">Повторите пароль</label>
            <Field type="password" name="confirmPassword" id="confirmPassword" autoComplete="new-password" />
            <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
          </div>
          <Button type="submit" size="large" fullWidth isLoading={isSubmitting}>
            Зарегистрироваться
          </Button>
        </Form>
      )}
    </Formik>
  );
}; 