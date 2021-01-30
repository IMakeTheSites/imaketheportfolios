import Head from "next/head";
import Link from "next/link";
import lob from "../img/lob.jpg";
import dataTape from "../img/dataTapeSite.jpg";
import mqExports from "../img/mqExportsSite.jpg";
import worklete from "../img/worklete.png";

const Work = () => {
  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <img src={worklete} />
            <Link href="https://www.worklete.com/">
              <a className="btn-light">Worklete</a>
            </Link>
          </div>
          <div className="item">
            <img src={lob} />
            <Link href="https://lob.com/">
              <a className="btn-light">Lob</a>
            </Link>
          </div>
          <div className="item">
            <img src={mqExports} />
            <Link href="https://mqexports.com/">
              <a className="btn-light">MQ Exports WooCommerce Site</a>
            </Link>
          </div>
          <div className="item">
            <img src={dataTape} />
            <Link href="https://datatape.io/">
              <a className="btn-light">The Data Tape</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
