import { FC, useEffect, useState } from 'react';
import { useUserStore } from '../../entities/user';
import { Button } from '../../shared/ui/Button';
import styles from './ProfilePage.module.scss';

export const ProfilePage: FC = () => {
  const { profile, isLoading, error, fetchProfile, updateProfile } = useUserStore();
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (profile) setForm({ name: profile.name || '', phone: profile.phone || '' });
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    setSuccess(false);
    await updateProfile(form);
    setSuccess(true);
    setEdit(false);
  };

  if (isLoading && !profile) return <div className={styles.profilePage}>Загрузка...</div>;
  if (error && !profile) return <div className={styles.profilePage}>Ошибка: {error}</div>;
  if (!profile) return null;

  return (
    <div className={styles.profilePage}>
      <h2 className={styles.title}>Профиль</h2>
      <div className={styles.field}><b>Email:</b> {profile.email}</div>
      <div className={styles.field}>
        <b>Имя:</b>{' '}
        {edit ? (
          <input name="name" value={form.name} onChange={handleChange} />
        ) : (
          profile.name || '-'
        )}
      </div>
      <div className={styles.field}>
        <b>Телефон:</b>{' '}
        {edit ? (
          <input name="phone" value={form.phone} onChange={handleChange} />
        ) : (
          profile.phone || '-'
        )}
      </div>
      {success && <div className={styles.success}>Профиль обновлён</div>}
      <div className={styles.actions}>
        {edit ? (
          <>
            <Button onClick={handleSave}>Сохранить</Button>
            <Button variant="secondary" onClick={() => setEdit(false)}>Отмена</Button>
          </>
        ) : (
          <Button onClick={() => setEdit(true)}>Редактировать</Button>
        )}
      </div>
    </div>
  );
}; 