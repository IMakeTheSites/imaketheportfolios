import Head from "next/head";
import Link from "next/link";
import lob from "../img/lob.jpg";
import dataTape from "../img/dataTapeSite.jpg";
import mqExports from "../img/mqExportsSite.jpg";
import worklete from "../img/worklete.png";
// import Image from "next/image";

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
            {/* <Image
              src="/worklete.png"
              alt="Worklete"
              width="906"
              height="815"
            /> */}
            <Link href="https://www.worklete.com/">
              <a className="btn-light">Worklete</a>
            </Link>
          </div>
          <div className="item">
            <img src={lob} />
            {/* <Image src="/lob.jpg" alt="Lob" width="1200" height="905" /> */}
            <Link href="https://lob.com/">
              <a className="btn-light">Lob</a>
            </Link>
          </div>
          <div className="item">
            <img src={mqExports} />
            {/* <Image
              src="/mqExportsSite.jpg"
              alt="mqexports shop"
              width="1525"
              height="905"
            /> */}
            <Link href="https://mqexports.com/">
              <a className="btn-light">MQ Exports WooCommerce Site</a>
            </Link>
          </div>
          <div className="item">
            <img src={dataTape} />
            {/* <Image
              src="/dataTapeSite.jpg"
              alt="The Data Tape"
              width="1267"
              height="905"
            /> */}
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
