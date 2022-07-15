import { Badge, Box, Grid, Group, Image, Text, Title } from '@mantine/core'
import { StaticImageData } from 'next/image'


type MyProps = {
  title: string
  description: string
  openSource?: boolean
  link?: string
  screenShot: {
    img: any,
    caption: string
  }
}

export function ProjectItem(props: MyProps) {
  const badge = props.openSource ? <Badge color='green' size='xs'>OPEN SOURCE</Badge> : <Badge color='orange' size='xs'>CLOSED SOURCE</Badge>
  return (
    <Grid mb={40}>
      <Grid.Col span={6}>
        <Group>
          <Title order={3}>{props.title}</Title>
          <Box>{badge}</Box>
        </Group>
        <p><Text>{props.description}</Text></p>
        {props.link && <p><Text variant='link' component='a' href={props.link}>View Project at Github</Text></p>}
      </Grid.Col>
      <Grid.Col span={6}>
        <Image
          height={300}
          radius="md"
          src="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80"
          alt="Random unsplash image"
        />
      </Grid.Col>
    </Grid>
  )
}
