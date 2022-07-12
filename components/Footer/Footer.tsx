import React from 'react'
import { createStyles, Container, Group, ActionIcon, Text } from '@mantine/core'
import { BrandTwitter, BrandYoutube, BrandInstagram, BrandLinkedin, BrandGithub } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 0,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,

    // [theme.fn.smallerThan('xs')]: {
    //   flexDirection: 'column',
    // },
  },

  links: {
    // [theme.fn.smallerThan('xs')]: {
    //   marginTop: theme.spacing.md,
    // },
  },
}))

export function Footer() {
  const { classes } = useStyles()
  const year = new Date().getUTCFullYear()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text color="dimmed" size="sm" align="center">
          © {year} Nithyakala
        </Text>{' '}
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandLinkedin size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandGithub size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
