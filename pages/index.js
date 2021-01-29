import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <Head>
        <title>I Make the Sites</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="home" className={styles.main}>
        <div className="main">
          <h1 className="lg-heading">
            I Make the
            <span className="text-secondary"> Sites</span>
          </h1>
          <h2 className="sm-heading">
            Mark Wlodawski:
            <span className="text-secondary">
              {' '}
              Web Developer, Programmer, and Entrepreneur
            </span>
          </h2>
          <div>
            <Link href="https://twitter.com/imakethesites">
              <a className="icons">
                <FaTwitter />
              </a>
            </Link>
            <br />
            <Link href="https://www.facebook.com/imakethesites">
              <a className="icons">
                <FaFacebookF />
              </a>
            </Link>
            <br />
            <Link href="https://www.linkedin.com/in/gowiththewlo/">
              <a className="icons">
                <FaLinkedin />
              </a>
            </Link>
            <br />
            <Link href="https://github.com/IMakeTheSites">
              <a className="icons">
                <FaGithub />
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
