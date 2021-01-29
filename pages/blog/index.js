import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../lib/api";
import styles from "../../styles/Home.module.css";
import blogStyles from "../../styles/Blog.module.css";

const Blog = ({ allPosts: { edges } }) => (
  <div className={styles.container}>
    <Head>
      <title>Blog Articles</title>
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

    <main className={styles.main}>
      <h1 className={styles.title}>Latest Blog Articles</h1>
      <hr />
      <section>
        {edges.map(({ node }) => (
          <div className={blogStyles.listitem} key={node.id}>
            <div className={blogStyles.listitem__thumbnail}>
              <figure>
                <img
                  src={node.extraPostInfo.thumbImage.mediaItemUrl}
                  alt={node.title}
                />
              </figure>
            </div>
            <div className={blogStyles.listitem__content}>
              <h2>{node.title}</h2>
              <p>{node.extraPostInfo.authorExcerpt}</p>
              <Link href={`/blog/${node.slug}`}>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  </div>
);

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}

export default Blog;
