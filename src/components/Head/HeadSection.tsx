import Head from "next/head"

type Props = {
  title: string
  page: string
}

const HeadSection = ({ title, page }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        http-equihttpequiv="Content-Type"
        content="text/html;charset=UTF-8"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={`${page} Page of My Portfolio using Nextjs Generated by create next app - ${page} Page`}
      />
      <meta
        name="keywords"
        content={`React, Nextjs, Portfolio, Riches, Full stack, ${page}`}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadSection