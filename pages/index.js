import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/workexp'
import { SkillsType, SkillsSection } from '../components/skills'
import { AiOutlineAmazon } from 'react-icons/ai'

const Home = () => {
  return (
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
          Jeremy has 3+ years experience in React, JS, Python and AWS serverless
          technologies, creating new tools that would benefit his team and his
          organisation as a whole. He is interested in being more involved in
          development work, particualrly the front-end as he enjoys developing
          visually apepaling applications that is easy for customers to use. He
          is happy to learn any new technologies and tools if the need arises.
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
          JIRA, Confluence, GIT, AWS
        </SkillsSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <div>
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
          <Heading as="h4" size="xs" float="right">
          2018 - Present
          </Heading>
        </div>
        <br></br>
        <Heading as="h4" size="xs">
          Quality Assurance Engineer
        </Heading>
        <Heading as="h4" size="xs">
          Quality Assurance Technician
        </Heading>
        <p></p>
      </Section>
    </Container>
  )
}

export default Home
