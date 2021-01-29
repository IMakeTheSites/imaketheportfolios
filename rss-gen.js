require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const getAllPostsXmlData = async () => {
  const query = `
    query AllPosts {
        psots(where: {orderby: {field: DATE, order: DESC}}) {
            edges {
                node {
                    id
                    date
                    title
                    slug
                    content
                    excerpt
                }
            }
        }
    }
    `;
  const headers = { 'Content-Type': 'application/json' };
  const allPosts = await axios({
    method: 'post',
    url: process.env.WP_API_URL,
    headers,
    data: JSON.stringify({ query }),
  });

  return allPosts.data.data.posts.edges;
};

const blogPostsRssXml = (blogPosts) => {
  let latestPostDate = '';
  let rssItemsXml = '';
  blogPosts.forEach(({ node }) => {
    const post = node;
    const postDate = Date.parse(postdate);

    const postHref = `http://imakethesites.com/blog/${post.slug}`;

    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date;
    }

    rssItemsXml += `
        <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${postHref}</link>
        <pubDate>${post.date}</pubDate>
        <guid isPermaLink="false">${postHref}</guid>
        <description>
        <![CDATA[${post.content}]]>
        </content:encoded>
        </item>`;
  });
  return {
    rssItemsXml,
    latestPostDate,
  };
};

const getRssXml = (blogPosts) => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);

  return `<?xml version="1.0" ?>
    <rss
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    version="2.0"
    >
    <channel>
    <title><![CDATA[Frontend development articles by Rob Kendal]]></title>
    <link>http://imakethesites.com</link>
    <description>
    <![CDATA[Come learn about Mark Wlodawski and his foray into coding!]]>
    </description>
    <language>en</language>
    <lastBuildDate>${latestPostDate}</lastBuildDate>
    ${rssItemsXml}
    </channel>
    </rss>`;
};

async function generateRSS() {
  const allBlogPostData = await getAllPostsXmlData();
  const processedXml = getRssXml(allBlogPostData);

  const staticOutputPath = path.join(process.cwd(), 'out');

  fs.writeFile(`${staticOutputPath}/rss.xml`, processedXml, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File written successfully');
    }
  });
}
generateRSS();
