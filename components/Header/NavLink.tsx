import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { useState, useEffect, ReactElement, Children } from 'react'
import { createStyles } from '@mantine/core'

type NavLinkProps = {
  label: string
  href: string
}

const useStyles = createStyles((theme) => ({
  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}))

export const NavLink = ({ href, label }: NavLinkProps) => {
  const { classes, cx } = useStyles()
  const { asPath, isReady } = useRouter()

  const childClassName = classes.link
  const [className, setClassName] = useState(childClassName)

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Using URL().pathname to get rid of query and hash
      const linkPathname = new URL(href as string, location.href).pathname
      const active = new URL(asPath, location.href).pathname

      const newClassName = cx(classes.link, { [classes.linkActive]: active === linkPathname })

      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [asPath, isReady, childClassName, setClassName, className])

  return (
    <Link href={href}>
      <a className={className}>{label}</a>
    </Link>
  )
}
