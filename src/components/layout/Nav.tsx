import { NavLink } from 'react-router-dom';
import styles from './layout.module.css';

const links = [
  { to: '/', label: 'Acasă', end: true },
  { to: '/despre', label: 'Despre' },
  { to: '/noutati', label: 'Noutăți' },
  { to: '/expozitii', label: 'Expoziții' },
  { to: '/contact', label: 'Contact' },
];

interface NavProps {
  onNavigate?: () => void;
}

export function Nav({ onNavigate }: NavProps) {
  return (
    <nav aria-label="Navigare principală" className={styles.nav}>
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              onClick={onNavigate}
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
