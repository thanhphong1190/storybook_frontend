import styled from 'styled-components'
import tw from 'twin.macro'

export const Section = styled.section`
  ${tw`w-full bg-grey__light`}
`

export const Container = styled.div`
  ${tw`container mx-auto`}
`

export const TitleWrapper = styled.div`
  ${tw`lg:px-8`}
`

export const FranchiseWrapper = styled.div`
  ${tw`w-full flex flex-wrap items-stretch justify-center`}
`

export const FranchiseItem = styled.div`
  ${tw`flex flex-col w-full lg:w-1/2`}
`
