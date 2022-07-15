import { Container, Space } from '@mantine/core'
import { ProjectItem } from '../components/ProjectItem/ProjectItem'
import { SectionHead } from '../components/SectionHead/SectionHead'

const PROJECTS = [
  {
    title: 'Pomegradient',
    description:
      'Pomegradient is a web-based gradient solutiuon currently in beta that allows you to find, save and craft gradients with a creative community!',
    link: 'https://www.bundleapps.io/',
    screenShot: {
      img: '',
      caption: 'ad sadfsdf sfdsdfsdf',
    },
  },
]

export default function ProjectsPage() {
  return (
    <>
      <SectionHead centered supTitle="Projects" title="Some of my recent works" />
      <Container mt={50} mb={50}>
        <ProjectItem {...PROJECTS[0]} />
        <ProjectItem {...PROJECTS[0]} />
        <ProjectItem {...PROJECTS[0]} />
      </Container>
    </>
  )
}
