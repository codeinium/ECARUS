import { FC, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../shared/ui/Button';
import { httpClient } from '../../shared/api/http-client';
import { API_ENDPOINTS } from '../../shared/config/api';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss';

interface PasswordResetValues {
  password: string;
  confirmPassword: string;
}

const initialValues: PasswordResetValues = {
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  password: Yup.string().min(6, 'Минимум 6 символов').required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Обязательное поле'),
});

export const PasswordResetForm: FC = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setError(null);
        setSuccess(false);
        try {
          await httpClient.post(API_ENDPOINTS.auth.reset, { ...values, token });
          setSuccess(true);
        } catch (e: any) {
          setError(e?.response?.data?.message || 'Ошибка сброса пароля');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Сброс пароля</h2>
          {success ? (
            <>
              <div className={styles.success}>Пароль успешно изменён</div>
              <Button type="button" size="large" fullWidth onClick={() => navigate('/login')}>
                Войти
              </Button>
            </>
          ) : (
            <>
              {error && <div className={styles.error}>{error}</div>}
              <div className={styles.field}>
                <label htmlFor="password">Новый пароль</label>
                <Field type="password" name="password" id="password" autoComplete="new-password" />
                <ErrorMessage name="password" component="div" className={styles.error} />
              </div>
              <div className={styles.field}>
                <label htmlFor="confirmPassword">Повторите пароль</label>
                <Field type="password" name="confirmPassword" id="confirmPassword" autoComplete="new-password" />
                <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
              </div>
              <Button type="submit" size="large" fullWidth isLoading={isSubmitting}>
                Сбросить пароль
              </Button>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
}; 