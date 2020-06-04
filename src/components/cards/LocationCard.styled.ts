import styled from 'styled-components'
import tw from 'twin.macro'

export const LocationCardStyled = styled.div`
  ${tw`relative bg-grey__light p-4 flex flex-col font-display md:flex-row md:max-w-md`}

  &:after {
    ${tw`absolute bg-orange text-white h-full w-4 right-0 top-0 pt-12 text-center text-xl`}
    content: '\\276D'
  }
`

export const LocationCardTitle = styled.h6`
  ${tw`text-blue__dark font-extrabold text-xl`}
`

export const LocationInfo = styled.a`
  ${tw`w-3/4`}

  & p {
    ${tw`text-blue text-sm font-extrabold`}
  }

  & span {
    ${tw`text-blue__dark text-sm font-extrabold`}
  }
`

export const LocationFeatures = styled.div`
  ${tw`text-orange flex md:flex-wrap md:w-1/4 md:h-16 md:self-end`}
`

export const FeatureIcon = styled.a<{ iconImg?: string }>`
  ${props => props.iconImg && `background: url(${props.iconImg}) center/150% no-repeat;`}
  ${tw`w-8 h-8`}
  pointer: cursor;
`

export const FeatureBadge = styled.span`
  ${tw`absolute bg-blue text-white text-center text-xs rounded-lg px-2 hidden md:inline`}
  top: 1rem;
  right: 2rem;

  &:after {
    ${tw`absolute text-blue`}
    content: '\\25BC';
    top: 0.75rem;
    right: 40%;
  }
`
