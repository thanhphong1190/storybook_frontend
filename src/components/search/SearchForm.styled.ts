import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import AsyncSelect from 'react-select/async'

export const LocationSearchWrapper = styled.div`
  ${tw`relative flex flex-col lg:flex-row lg:max-w-2xl w-full justify-center items-center bg-grey__light py-4`}
`

export const AsyncSelectStyled = styled(AsyncSelect)`
  ${tw`w-64 h-full`}

  & > div {
    ${tw`rounded-none border-none`}
  }
`

export const SearchLabel = styled.label`
  ${tw`font-display text-blue__dark text-lg font-bold`}
`

export const SearchFormGroup = styled.div`
  ${tw`relative flex items-center justify-center w-full lg:w-3/5`}
  
  & > button {
    ${tw`h-full lg:mx-2`}
    padding: 0.45rem 1rem;
  }
`

export const NewsSearchWrapper = styled.div<{ isDisplay: boolean }>`
  ${tw`absolute flex flex-col w-full justify-around items-center bg-orange py-2 text-white
       lg:flex-row lg:max-w-2xl`}
  right: -100%;
  transition: 1s;

  ${props => props.isDisplay && css`right: 0; transition: 1s;`}
`

export const NewsSearchGroup = styled(SearchFormGroup)`
  ${tw`lg:w-full justify-around`}

  & > button {
    ${tw`text-orange focus:outline-none`}
    padding: 0.45rem 1rem;
  }
`

export const LabelIcon = styled.label`
  ${tw`hidden lg:block text-2xl px-4`}
`

export const NewsSearchTextInput = styled.input`
  ${tw`bg-orange border-b-2 h-8 text-white font-display outline-none`}

  @media(min-width: 640px){
    min-width: 70%;
  }

  &::placeholder {
    ${tw`text-white`}
  }
`
