import Document, { Html, Main, Head, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(){
      return (
        <Html>
          <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Inter:wght@400;600;700&family=Poppins&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Inter:wght@400;600;700&family=Poppins&family=Ubuntu:wght@300&display=swap"
            rel="stylesheet" 
          />

          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
}
