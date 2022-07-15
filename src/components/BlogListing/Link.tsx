import { useMemo } from "react"
import NLink from "next/link"
import { Anchor } from '@mantine/core';

export interface Props {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

const isExternalLink = (href: string) =>
  href == null || href.startsWith("http://") || href.startsWith("https://")

const useIsExternalLink = (href: string) =>
  useMemo(() => isExternalLink(href), [href])

const Link = ({ href, external, children, ...props }: Props) => {
  const isExternal = (useIsExternalLink(href) || external) ?? false

  if (isExternal) {
    return (
      <Anchor href={href}         target="_blank"
      rel="noreferrer noopener" {...props}>
        {children}

      </Anchor>
    )
  }

  return (
    <Anchor component={NLink} href={href} {...props}>
      {children}
    </Anchor>
  )
}

export default Link
