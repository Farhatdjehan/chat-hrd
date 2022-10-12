import Head from "next/head";

interface HelmetProps {
  pageTitle: string;
}

export default function Helmet(props: HelmetProps) {
  const { pageTitle } = props;
  return (
    <>
      <Head>
        <title>Akhlaq Chat - Chat HRD | {pageTitle}</title>
        <meta
          name="description"
          content="Jangan akhlaqless kalau chat HRD kamu ya!"
        />
        <meta
          name="image"
          content="https://i.ibb.co/gyWywxg/ms-icon-310x310.png"
        />
        <meta property="og:url" content="https://chat-hrd.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Akhlaq Chat - Chat HRD | ${pageTitle}`}
        />
        <meta
          property="og:description"
          content="Jangan akhlaqless kalau chat HRD kamu ya!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/gyWywxg/ms-icon-310x310.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Akhlaq Chat - Chat HRD | ${pageTitle}`}
        />
        <meta
          name="twitter:description"
          content="Jangan akhlaqless kalau chat HRD kamu ya!"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/gyWywxg/ms-icon-310x310.png"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
