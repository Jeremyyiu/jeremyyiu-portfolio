import { Box, ListItem, List, SimpleGrid } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const WorkExpSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const WorkExpYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

export const WorkExpList = styled(List)`
  margin-top: 0.5em;
`

export const WorkExpListItem = styled(ListItem)`
  text-align: justify;
  margin-top: 0.5em;
`

export const WorkSimpleGrid = styled(SimpleGrid)`
  margin-top: 0.5em;
`
