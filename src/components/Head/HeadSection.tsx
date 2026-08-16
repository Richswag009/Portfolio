import Head from "next/head";

type Props = {
  title: string;
  page: string;
  description: string;
  path?: string;
  image?: string;
};

const SITE_URL = "https://richesmetelewawon.dev";

const HeadSection = ({ title, description, path = "", image }: Props) => {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/images/me.jpg`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#0a0a0c" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </Head>
  );
};

export default HeadSection;
