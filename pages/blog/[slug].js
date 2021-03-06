import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

// data
import { getAllPostsWithSlug, getPost } from "../../lib/api";

// styles
import styles from "../../styles/Home.module.css";
import blogStyles from "../../styles/Blog.module.css";

function Post({ postData }) {
  const router = useRouter();

  if (!router.isFallback && !postData?.slug) {
    return <p>hmm...looks like an error</p>;
  }

  const formatDate = (date) => {
    const newDate = new Date(date);

    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{postData ? postData.title : ""}</title>
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
        {router.isFallback ? (
          <h2>Loading</h2>
        ) : (
          <article className={blogStyles.article}>
            <div className={blogStyles.postmeta}>
              <h1 className={blogStyles.title}>{postData.title}</h1>
              <p>{formatDate(postData.date)}</p>
            </div>
            <div className={blogStyles.listitem__content}>
              <div
                className="post-content content"
                dangerouslySetInnerHTML={{ __html: postData.content }}
              />{" "}
            </div>
          </article>
        )}
        <p>
          <Link href="/blog">
            <a>Back to articles</a>
          </Link>
        </p>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug);

  return {
    props: {
      postData: data.post,
    },
  };
}

export default Post;
