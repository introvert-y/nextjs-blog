

import Layout from '../components/layout'

function Page({ stars }) {
  return (
    <Layout>
      <p>Next.js has {stars} ⭐️</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()

  return {
    props: {
      stars: json.stargazers_count,
    },
  }
}

export default Page
