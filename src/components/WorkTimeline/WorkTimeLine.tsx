import { Box, Button, Container, Group, Table, Text } from '@mantine/core'

type MyProps = {
  expList: Array<{
    org: { name: string; link: string }
    title: string
    duration: string
  }>
}

export function WorkTimeline({ expList }: MyProps) {
  const rows = expList.map((exp) => (
    <tr key={exp.title}>
      <td>{exp.title}</td>
      <td>
        <Text variant='link' component='a' href="{exp.org.link}">{exp.org.name}</Text>
      </td>
      <td>{exp.duration}</td>
    </tr>
  ))

  return (
    <Box mb={30} sx={{ maxWidth: 500 }}>
      <Table striped>
        <thead>
          <tr>
            <th>Position</th>
            <th>Organisation</th>
            <th>Period</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Group mt={30}>
        <Button
          component="a"
          href="https://nithis.in/assets/nithya-kala-resume.pdf"
          radius="xl"
          size="md"
          target="_blank"
          rel="noopener"
        >
          View my resume
        </Button>
      </Group>
    </Box>
  )
}
