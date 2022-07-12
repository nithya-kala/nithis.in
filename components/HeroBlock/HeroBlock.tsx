import {
  Button, Container, createStyles, Group, List, Text, ThemeIcon, Title
} from '@mantine/core'
import { Check } from 'tabler-icons-react'
import { ProfileImg } from '../ProfileImg/ProfileImg'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    marginRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: 280,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}))

export const HeroBlock = () => {
  const { classes } = useStyles()
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              I'm <span className={classes.highlight}>Nithya</span>, Fullstack developer working at IBM.
            </Title>
            <Text color="dimmed" mt="md">
              Full stack developer with strong expertise in Mongo, Express, Angular, React and Node (MEAN/MERN stack).
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <div className={classes.image} >
            <ProfileImg size={150} rounded backgroundColor="rgba(155, 155, 155, .05)" />
          </div>
        </div>
      </Container>
    </div>
  )
}
