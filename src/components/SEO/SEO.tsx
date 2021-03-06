import { DefaultSeo, NextSeo, NextSeoProps } from "next-seo"
import Head from "next/head"
import { DefaultSeoProps } from "next-seo"

export interface Props extends NextSeoProps {
  title?: string
  description?: string
  image?: string
  author?: string
}

const title = "Nithyakala Blog"
export const url = "https://nithis.in"
const description = "Nithyakala Blog"

const config: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    site_name: title,
    article: {
      authors: [],
    },
  },
}

export const SEO: React.FC<Props> = ({ image, author, ...props }) => {
  const title = props.title ?? config.title
  const description = props.description || config.description

  return (
    <>
      <DefaultSeo {...config} />

      <NextSeo
        {...props}
        {...(image == null
          ? {}
          : {
              openGraph: {
                images: [{ url: image }],
                article: {
                  authors: [author || ''],
                },
              },
            })}
      />

      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
      </Head>
    </>
  )
}
