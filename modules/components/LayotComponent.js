import Head from 'next/head'

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <div>{children}</div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Vocabulary Hour',
  description: 'Create your word collection',
  keywords: 'vocabulary, english, collection',
}

export default Layout
