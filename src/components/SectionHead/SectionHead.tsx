import { Container, createStyles, Text, Title } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme, { centered }: { centered?: boolean }) => ({
  wrapper: {
    paddingTop: 20,
    paddingBottom: 0,
  },

  supTitle: {
    textAlign: centered ? 'center' : 'left',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 8],
    letterSpacing: 0.5,
  },

  title: {
    textAlign: centered ? 'center' : 'left',
    lineHeight: 1,
    marginTop: theme.spacing.md,
  },

  description: {
    textAlign: centered ? 'center' : 'left',
    marginTop: theme.spacing.xs,
  },
}))

interface SectionHeadProps {
  centered?: boolean
  supTitle?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
}

export function SectionHead({ centered, supTitle, title, description }: SectionHeadProps) {
  const { classes } = useStyles({ centered })

  return (
    <Container className={classes.wrapper}>
      {supTitle && <Text className={classes.supTitle}>{supTitle}</Text>}

      {title && (
        <Title className={classes.title} order={2}>
          {title}
        </Title>
      )}
      
      {description && (
        <Text color="dimmed" className={classes.description}>
          {description}
        </Text>
      )}
    </Container>
  )
}
