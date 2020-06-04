import tw from 'twin.macro'
import styled from 'styled-components'

export const Section = styled.section`
  ${tw`w-full relative`}
`

export const Container = styled.div`
  ${tw`container mx-auto`}
`

export const TitleWrapper = styled.div`
  ${tw`w-full flex flex-col justify-center items-center`}
`

export const Title = styled.span`
  ${tw`text-blue__dark font-bold uppercase text-4xl`}
`
