import Head from 'next/Head';

const Contact = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
        <title>Contact Me</title>
      </Head>
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email: </span>
            imakethesites@gmail.com
          </div>
          <div>
            <span className="text-secondary">Skype: </span>karaoke_emperor
          </div>
          <div>
            <span className="text-secondary">Address: </span>Orlando, FL
          </div>
        </div>
      </main>
      <style jsx>
        {`
          h1,
          h2,
          h3 {
            margin: 0;
            font-weight: 400;
          }
          h1.lg-heading,
          h2.lg-heading,
          h3.lg-heading {
            font-size: 6rem;
          }
          h1.sm-heading,
          h2.sm-heading,
          h3.sm-heading {
            margin-bottom: 2rem;
            padding: 0.2rem 1rem;
            background: rgba(73, 73, 73, 0.5);
          }
          .text-secondary {
            color: #eece1a;
          }
          .boxes {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 1rem;
          }
          .boxes div {
            font-size: 2rem;
            border: 3px #fff solid;
            padding: 1.5rem 2.5rem;
            margin-bottom: 3rem;
          }
          .boxes div:hover {
            padding: 0.5rem 1.5rem;
            background: #eece1a;
            color: #000;
          }
          .boxes div:hover span {
            color: #000;
          }
        `}
      </style>
    </div>
  );
};
export default Contact;
