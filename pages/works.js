import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import testpng from '../public/images/works/test.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      {/* columns = base: 1, sm: 1, md:2 meaning default is 2 columns, if the screen is smaller then display 1 column */}
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="BatteryManager"
            title="Battery Manager"
            thumbnail={testpng}
          >
            My capstone project which is a battery management app developed in
            2018 aimed to help users maximise their battery life usage.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
