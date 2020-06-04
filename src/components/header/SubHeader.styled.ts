import styled from 'styled-components'
import tw from 'twin.macro'
import Select from 'react-select'

export const SubHeaderWrapper = styled.div`
  ${tw`relative flex flex-col-reverse items-center md:flex-row w-full font-display`}
`

export const DropdownStyled = styled(Select)`
  ${tw`uppercase italic`}
  min-width: 10rem;
  & > div {
    ${tw`rounded-none border-blue`}
  }
`

export const SubHeaderStyled = styled.h2<{ separator?: boolean, hasDropdown?: boolean }>`
  ${tw`text-blue__dark flex-1 text-center text-2xl py-4 md:pl-40 uppercase font-extrabold`}

  ${props => !props.hasDropdown && tw`md:pl-0`}

  &::after {
    ${props => props.separator && tw`absolute bottom-0 h-1 bg-orange`}
    content: " ";
    left: 50%;
    width: 185px;
    transform: translateX(-50%) rotate(-4deg);
  }
`
