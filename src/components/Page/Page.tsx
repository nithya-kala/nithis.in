import { Box } from '@mantine/core'
import React from 'react'
import { Footer } from '../Footer/Footer'
import { HeaderResponsive } from '../Header/Header'
import { SEO, Props as SEOProps } from '../SEO/SEO'

const LINKS = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  // { link: '/projects', label: 'Projects' },
  { link: '/blogs', label: 'Blogs' },
]

export interface Props {
  seo?: SEOProps
}

export const Page: React.FC<Props> = (props) => {
  return (
    <>
      <SEO {...props.seo} />
      <HeaderResponsive links={LINKS} />
      <Box>{props.children}</Box>
      <Footer />
    </>
  )
}
