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
  phone: string;
  inn: string;
  message: string;
}

const initialValues: RegisterValues = {
  email: '',
  phone: '',
  inn: '',
  message: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  phone: Yup.string().required('Обязательное поле'),
  inn: Yup.string().required('Обязательное поле'),
  message: Yup.string().required('Обязательное поле'),
});

export const RegisterForm: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<any>(null);
  const navigate = useNavigate();

  if (success) {
    return (
      <div className={styles.form}>
        <h2 className={styles.title}>Регистрация успешна</h2>
        <div className={styles.field}><b>Email:</b> {success['e-mail']}</div>
        <div className={styles.field}><b>Телефон:</b> {success.phone}</div>
        <div className={styles.field}><b>Пароль:</b> {success.password}</div>
        <Button onClick={() => navigate('/login')} size="large" fullWidth>Войти</Button>
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setError(null);
        setSuccess(null);
        try {
          const response = await httpClient.post(API_ENDPOINTS.register, values);
          setSuccess(response.data);
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
            <label htmlFor="phone">Телефон</label>
            <Field type="text" name="phone" id="phone" />
            <ErrorMessage name="phone" component="div" className={styles.error} />
          </div>
          <div className={styles.field}>
            <label htmlFor="inn">ИНН</label>
            <Field type="text" name="inn" id="inn" />
            <ErrorMessage name="inn" component="div" className={styles.error} />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Сообщение</label>
            <Field as="textarea" name="message" id="message" />
            <ErrorMessage name="message" component="div" className={styles.error} />
          </div>
          <Button type="submit" size="large" fullWidth isLoading={isSubmitting}>
            Зарегистрироваться
          </Button>
        </Form>
      )}
    </Formik>
  );
}; 