import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />

        <meta name="apple-mobile-web-app-title" content="vimrc.io" />
        <meta name="application-name" content="vimrc.io" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="author" content="Han Lee" />
        <meta
          name="description"
          content="Create useful .vimrc file for your vim editor"
        />
        <meta
          name="keywords"
          content="vi,vim,vimrc,.vimrc,file,crate,make,generate,build"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="vimrc.io" />
        <meta
          property="og:description"
          content="Create useful .vimrc file for your vim editor"
        />
        <meta property="og:image" content="/images/og-img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.vimrc.io" />

        <meta itemProp="name" content="vimrc.io" />
        <meta
          itemProp="description"
          content="Create useful .vimrc file for your vim editor"
        />
        <meta itemProp="image" content="/images/og-img.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
