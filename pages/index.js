import {
  Container,
  Box,
  Heading,
  ListIcon,
  Grid,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { SkillsType, SkillsSection } from '../components/skills'
import { WorkExpList, WorkExpListItem } from '../components/workexp'
import { AiOutlineAmazon } from 'react-icons/ai'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Home = () => {
  return (
    <Layout>
      <Container>
        <br></br>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          align="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a software engineer based in Sydney.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jeremy Yiu
            </Heading>
            <p>Quality Assurance Engineer / Software Engineer</p>
          </Box>
        </Box>
        <br></br>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Summary
          </Heading>
          <Paragraph>
            Jeremy has 3+ years experience in React, JS, Python and AWS
            serverless technologies, creating new tools that would benefit his
            team and his organisation as a whole. He is interested in being more
            involved in development work, particularly the front-end as he
            enjoys developing visually appealing applications that is easy for
            customers to use. He is happy to learn any new technologies and
            tools if the need arises.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <SkillsSection>
            <SkillsType>Front-End</SkillsType>
            React, HTML, CSS, Cypress, Prettier
          </SkillsSection>
          <SkillsSection>
            <SkillsType>Back-End</SkillsType>
            DynamoDB, API Gateway, Lambda, S3, IAM
          </SkillsSection>
          <SkillsSection>
            <SkillsType>Programming</SkillsType>
            Javascript, Python
          </SkillsSection>
          <SkillsSection>
            <SkillsType>Tools</SkillsType>
            JIRA, Confluence, GIT, AWS, Postman
          </SkillsSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Work Experience
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <Heading
                as="h4"
                size="sm"
                float="left"
                display="inline-flex"
                alignItems="center"
                style={{ gap: 4 }}
              >
                <AiOutlineAmazon />
                Amazon
              </Heading>
            </GridItem>
            <GridItem colStart={4} colEnd={6}>
              <Heading as="h4" size="xs" float="right">
                2018 - Present
              </Heading>
            </GridItem>
          </Grid>
          <Heading as="h4" size="xs">
            Quality Assurance Engineer (2020 - Present)
          </Heading>
          <Heading as="h4" size="xs">
            Quality Assurance Technician (2018 - 2020)
          </Heading>
          <WorkExpList>
            <WorkExpListItem>
              <ListIcon
                as={ChevronRightIcon}
                color={useColorModeValue('orange.400', 'teal.400')}
              ></ListIcon>
              Sole front-end engineer and developed the web UI for two major
              services used across the Alexa International Quality (AIQ)
              organisation.{' '}
            </WorkExpListItem>
            <WorkExpListItem>
              <ListIcon
                as={ChevronRightIcon}
                color={useColorModeValue('orange.400', 'teal.400')}
              ></ListIcon>
              Developed Python scripts to automate and reduce manual effort for
              tasks such as obtaining multiple status reports, updating test
              data etc.
            </WorkExpListItem>
            <WorkExpListItem>
              <ListIcon
                as={ChevronRightIcon}
                color={useColorModeValue('orange.400', 'teal.400')}
              ></ListIcon>
              Acted as a domain SME, collaborating with other teams, creating
              test strategies and E2E automation tests for localisation testing
              to ensure quality of Echo devices and Alexa features launching in
              the ANZ market.
            </WorkExpListItem>
            <WorkExpListItem>
              <ListIcon
                as={ChevronRightIcon}
                color={useColorModeValue('orange.400', 'teal.400')}
              ></ListIcon>
              Worked on initiatives to automate routine tasks and reduce manual
              effort.{' '}
            </WorkExpListItem>
          </WorkExpList>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
