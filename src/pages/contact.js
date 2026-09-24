import Link from 'next/link';
import styles from './contact.module.css';

const CONTACTS = [
  { label: 'email:', value: 'paigecaskey@gmail.com', href: 'mailto:paigecaskey@gmail.com' },
  { label: 'linkedin:', value: 'paige-caskey', href: 'https://www.linkedin.com/in/paige-caskey/' },
  { label: 'github:', value: 'paigecaskey', href: 'https://github.com/paigecaskey' },
];

const ContactPage = () => (
  <main className={styles.page}>
    <Link href="/" className={styles.back}>&larr; paige.</Link>
    <ul className={styles.list}>
      {CONTACTS.map(({ label, value, href }) => (
        <li key={label} className={styles.item}>
          <span className={styles.label}>{label}</span>
          <a
            className={styles.box}
            href={href}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {value}
          </a>
        </li>
      ))}
    </ul>
  </main>
);

export default ContactPage;
