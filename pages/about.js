import Head from 'next/head';
import aboutStyles from '../styles/About.module.css';
import profile from '../img/profile.jpg';

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <main id="about" className={aboutStyles.main}>
        <h1 className="lg-heading">
          About
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img src={profile} className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p className="about-p">
              I am very passionate about each of my projects and my objective is
              to create compelling software products that users will love! I am
              eager to develop attractive, functional, and mobile-friendly
              websites, web apps and mobile apps using current and cutting edge
              technology and code for you and your organization. After finishing
              my International MBA at the University of Memphis in 2011, I moved
              to China to teach English and look for international trade
              opportunities. Shortly after that, I began teaching myself web
              development. I started with HTML and CSS, then moved on to PHP,
              MySQL, JavaScript, and JavaScript frameworks like React.
            </p>
            <p className="about-p">
              These past few years as a mostly freelance developer specializing
              in frontend development have taught me much, and I am eager to use
              what I have learned to help you and your company by streamlining
              your online operations and improving your development through
              implementation of best practices and asset optimization.
            </p>
          </div>

          <div className="job job-1">
            <h3>LOB</h3>
            <h6>Front End Developer</h6>
            <p>
              I helped LOB revise their site's design using a CMS called
              Webflow, which the Marketing and Development teams required in
              order to collaborate. I used Marketo to manage the forms, CSS and
              JavaScript to control the appearance and functionality.
            </p>
          </div>
          <div className="job job-2">
            <h3>The Data Tape</h3>
            <h6>Front End React Developer</h6>
            <p>
              As a full stack developer, I built the web application, marketing
              website and React Native app from scratch and published the first
              version of the project.
            </p>
          </div>
          <div className="job job-3">
            <h3>Worklete</h3>
            <h6>Senior React-Native Developer</h6>
            <p>
              I worked with the development and design teams at Worklete to
              build and refine their mobile application built with React-Native.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
