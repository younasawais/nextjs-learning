import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts'


export default function Post({ postData, params }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  console.log(params)
  return {
    props: {
      postData
    }
  }
}
