import { Box, Container, Divider, Title } from '@mantine/core'
import { Page } from '../components/Page/Page'
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
    <Page>
      <Container>
        <SectionHead centered supTitle="About Me" title="Here's my story!" />
        <Box mb={50} mt={50}>
          <p>
            I'm Nithyakala, full stack developer, problem-solver and results-oriented. My mission is
            to translate user-focused ideas and requirements into applications that run blazing
            fast. Expertise in REST API development with the NodeJS express.
          </p>
          <p>
            I'm currently working as application developer at{' '}
            <a href="https://www.ibm.com" target="_blank" rel="noreferrer">
              IBM
            </a>{' '}
            where I help to develop various compliance tools with powerful functionality, high
            quality, scalable frontend web applications using Angular and React. Train and mentored
            developers for delivery.
          </p>
          <p>
            Prior to IBM, I worked as senior software engineer at{' '}
            <a href="https://www.emids.com" target="_blank" rel="noreferrer">
              emids
            </a>{' '}
            where I helped architect to develop REST API's using Expressjs. Prepared and delivered reports regarding project status and implementation. Developed Automated tasks with cron jobs, that reduces the repetitive work
          </p>
          <p>
            Before emids, I worked as a Associate for{' '}
            <a href="https://www.cognizant.com/us/en" target="_blank" rel="norefferer">
              Cognizant
            </a>{' '}
            helped in building reusable component libraries for multi-million dollar companies.
            Ensured the E2E quality of applications with Selenium cucumber BDD framework.
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
    </Page>
  )
}
