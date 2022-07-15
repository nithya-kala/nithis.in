import { Box, Center, Container, Divider, Text, Title } from '@mantine/core'
import { ProfileImg } from '../components/ProfileImg/ProfileImg'
import { SectionHead } from '../components/SectionHead/SectionHead'
import { WorkTimeline } from '../components/WorkTimeline/WorkTimeLine'

const WorkExpList = [
  {
    org: { name: 'IBM', link: 'https://ibm.com' },
    title: 'Full Stack Developer',
    duration: 'May 2016 to Till Date',
  },
  {
    org: { name: 'Emids', link: 'http://www.emids.com/' },
    title: 'Senior Software Engineer',
    duration: 'June 2014 to Nov 2015',
  },
  {
    org: { name: 'Cognizant', link: 'http://www.cognizant.com/' },
    title: 'Associate Software Engineer',
    duration: 'Mar 2011 to June 2014',
  },
]

export default function AboutPage() {
  return (
    <Container>
      <SectionHead centered supTitle="About Me" title="Here's my story!" />
      <Center mt={80} mb={60}>
        <ProfileImg size={120} backgroundColor="#7a829020" rounded />
      </Center>
      <Box mb={50}>
        <p>
          I'm Braydon, a developer, creative coder,{' '}
          <Text variant="link" component="a" href="/blog">
            blogger
          </Text>{' '}
          and self-proclaimed designer who specializes in front-end development. My mission is to
          translate user-focussed designs into pixel-perfect websites or applications that run
          blazing fast.
        </p>
        <p>
          I'm currently working as a senior front end developer at LogicGate where I help develop an
          agile GRC cloud solution that combines powerful functionality with intuitive design to
          enhance enterprise GRC programs.
        </p>
        <p>
          Prior to LogicGate, I worked as a senior full-stack engineer at Cognizant where I helped
          architect and develop full-stack RESTful microservices, train and prepare developers for
          delivery, and assist in leading the front-end practice in a lab-based working environment.
        </p>
        <p>
          Before Cognizant, I worked as a UI Developer for projekt202 helping craft design systems
          and building reusable component libraries for multi-million dollar companies.
        </p>
        <p>
          In a past life, I was an indie mobile developer making mobile games for iOS and Android,
          with one of my games outselling Angry Birds.
        </p>
        <p>
          You can find me on Twitter where I share tech-related tidbits and build in public, or you
          can follow me on GitHub. I often write about my findings on my blog and create cool things
          over on CodePen. I also help run a mediocre podcast.
        </p>
      </Box>
      <Divider variant="dashed" />
      <Box mt={50} mb={50}>
        <Title order={3} mt={20} mb={20}>
          Work experience
        </Title>
        <WorkTimeline expList={WorkExpList} />
      </Box>
    </Container>
  )
}
