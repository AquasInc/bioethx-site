import Link from 'next/link';
import styles from '../styles/Toast.module.css';

const Toast = () => (
    <Link href={"/IME2023"} className={styles.toast}>{'\uF09F\u918B'} IME 2023</Link>
);

export default Toast;
