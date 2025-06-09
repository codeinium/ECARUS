import { FC, useState } from 'react';
import styles from './Header.module.scss';
import { LoginForm, logout } from '../../../features/auth';
import { Link, useLocation } from 'react-router-dom';

const Modal = ({ open, onClose, children }: { open: boolean, onClose: () => void, children: React.ReactNode }) => {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={onClose}>
      <div style={{ minWidth: 340, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(0, 11, 38, 0.12)', padding: 0, position: 'relative' }} onClick={e => e.stopPropagation()}>
        <button style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer' }} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export const Header: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const isAuth = Boolean(localStorage.getItem('accessToken'));
  const location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/assets/images/vector/logo.svg" alt="ECORUS" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Главная</Link>
        <Link to="/collection-points" className={location.pathname.startsWith('/collection-points') ? styles.active : ''}>Пункты сбора</Link>
        <Link to="/eco-market" className={location.pathname.startsWith('/eco-market') ? styles.active : ''}>ЭкоМаркет</Link>
        <Link to="#" className={''}>О сервисе</Link>
      </nav>
      <div className={styles.right}>
        <div className={styles.city}>
          <img src="/assets/images/vector/pin.svg" alt="Pin" className={styles.icon} />
          <span>Казань</span>
        </div>
        <div className={styles.balance}>
          <img src="/assets/images/vector/coin.svg" alt="Coin" className={styles.icon} />
          <span>1000</span>
        </div>
        <div className={styles.profile}>
          <img src="/assets/images/vector/login.svg" alt="User" className={styles.avatar} onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }} />
          <span className={styles.username}>Алексей</span>
          {isAuth && (
            <button onClick={logout} style={{ marginLeft: 12, background: 'none', border: 'none', color: '#007AFF', cursor: 'pointer', fontWeight: 500 }}>
              Выйти
            </button>
          )}
        </div>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <LoginForm />
      </Modal>
    </header>
  );
}; 