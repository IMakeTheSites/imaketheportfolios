import styles from '../styles/Layout.module.css';
import Header from './Header';
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <body id="bg-img">
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </body>
      {/* <footer className={styles.footer}>
        Copyright &copy; I Make the Sites, 2020
      </footer> */}
    </div>
  );
};

export default Layout;
