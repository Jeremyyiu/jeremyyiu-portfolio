import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  ListIcon,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import { WorkExpList, WorkExpListItem } from '../../components/workexp'
import P from '../../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="BatteryManager">
    <Container>
      <Title>
        BatteryManager <Badge>2018</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries used</Meta>
          <span>ButterKnife, Dagger2</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/Jeremyyiu/BatteryManager">
            BatteryManager <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <P>
        This is my capstone project - Battery Manager. This project aims to help
        users maximise their usage of their battery life. Users can use the app
        to adjust their settings such as WiFi, bluetooth as well as view battery
        statistics e.g. battery temperature. Users are also given the option to
        turn on monochrome mode allowing them to save battery life. However this
        only affects phones with LED screens, LCD screens on the other hand,
        still produce the same amount of light and uses a light filter to block
        out the light. Thus, LCD will still use the same amount of battery in
        monochrome mode as using colour display.
      </P>
      <br></br>
      <List>
        <ListItem>
          <Meta>Features</Meta>
        </ListItem>
      </List>
      <WorkExpList>
        <WorkExpListItem>
          <ListIcon
            as={ChevronRightIcon}
            color={useColorModeValue('orange.400', 'teal.400')}
          ></ListIcon>
          Users can check their network status - wifi, mobile data, bluetooth,
          gps, hotspot, airplane mode and their data usage. Users can also
          toggle these settings accordingly.{' '}
        </WorkExpListItem>
        <WorkExpListItem>
          <ListIcon
            as={ChevronRightIcon}
            color={useColorModeValue('orange.400', 'teal.400')}
          ></ListIcon>
          Users can also toggle their brightness manually, switch on/off
          autobrightness and also switch on/off monochrome mode (This requires
          adb).{' '}
        </WorkExpListItem>
        <WorkExpListItem>
          <ListIcon
            as={ChevronRightIcon}
            color={useColorModeValue('orange.400', 'teal.400')}
          ></ListIcon>
          Users can view their battery statistics - battery life percentage,
          temperature, voltage, health and technology.{' '}
        </WorkExpListItem>
        <WorkExpListItem>
          <ListIcon
            as={ChevronRightIcon}
            color={useColorModeValue('orange.400', 'teal.400')}
          ></ListIcon>
          Users can create geofences and be notified when they enter/leave a
          geofence. Users can choose whether or not to toggle WiFi/bluetooth
          when entering/leaving a geofence. (Currently affects all geofences).{' '}
        </WorkExpListItem>
      </WorkExpList>
      <WorkImage src="/images/works/test.png" alt="BatteryManager" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
