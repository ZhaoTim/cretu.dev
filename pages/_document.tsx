import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' data-theme='cupcake'>
      <Head>
        {/* <link
          rel='preload'
          href='/fonts/ibm-plex-sans-var.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        /> */}
        <link href='/static/favicons/favicon.ico' rel='shortcut icon' />
        <link href='/static/favicons/site.webmanifest' rel='manifest' />
        {/* <link
          rel='preconnect'
          href='https://cdn.usefathom.com'
          crossOrigin=''
        /> */}
        <link
          href='/static/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/static/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/static/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link
          color='#4a9885'
          href='/static/favicons/safari-pinned-tab.svg'
          rel='mask-icon'
        />
        <meta content='#ffffff' name='theme-color' />
        <meta content='#ffffff' name='msapplication-TileColor' />
        <meta
          content='/static/favicons/browserconfig.xml'
          name='msapplication-config'
        />
        <meta
          content='fK4YqLAHjoaynXLF1e5gaPzDNOircgiYSgAwSXqr61o'
          name='google-site-verification'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
