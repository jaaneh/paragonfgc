import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Paragon is an esports organization supporting players in SSBU, Guilty Gear & Tekken."
        />
        <meta name="keywords" content="paragon, paragonfgc, fgc, fighting games, esports, ssbu, guilty gear, tekken" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
