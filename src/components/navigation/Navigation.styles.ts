import styled from 'styled-components'
import tw from 'twin.macro'

export const NavigationSection = styled.section<{ isBackground?: boolean }>`
  ${tw`w-full transition-all duration-300 bg-blue lg:bg-transparent`}
  ${({ isBackground }) => isBackground && tw`lg:bg-blue`}
`

export const Container = styled.div`
  ${tw`container mx-auto flex flex-wrap justify-between items-center py-2 px-4`}
`

export const Logo = styled.img`
  max-height: 120px;
  max-width: 120px;
  ${tw`hidden w-1/4 lg:w-auto lg:block`};
`

export const MobileLogo = styled.img`
  max-height: 120px;
  max-width: 120px;
  ${tw`w-1/4 lg:w-auto lg:hidden`};
`

export const DesktopMenus = styled.div`
  ${tw`hidden lg:flex lg:flex-wrap flex-1 justify-between pl-12`}
`

export const Menu = styled.a`
  ${tw`py-2 px-2 text-center font-bold text-xl text-white hover:text-orange transition-colors duration-300`}
`

export const MobileMenuButton = styled.button`
  ${tw`lg:hidden italic text-2xl`}
  ${({ color }) => color == 'orange' && tw`text-orange`}
  ${({ color }) => (!color || color == 'white') && tw`text-white`}
`

export const JoinButton = styled.button`
  ${tw`uppercase border border-orange px-4 py-2 font-bold text-white hover:bg-orange transition-colors duration-300`}
`

export const MobileWrapper = styled.div`
  ${tw`absolute max-h-screen h-screen w-screen bottom-0 left-0 flex flex-col justify-between z-50`}
`

export const HeaderGroup = styled.div`
  ${tw`w-full flex flex-row justify-between px-4 py-2 transition-all duration-300`}
`

export const MobileMenusWrapper = styled.div`
  ${tw`w-full flex-1 overflow-y-hidden`}
`

export const MobileActions = styled.div`
  ${tw`w-full`}
`

export const MobileMenus = styled.div`
  ${tw`max-h-full w-full overflow-y-auto flex flex-col`}
`

export const MobileButtonWrapper = styled.div`
  ${tw`my-4 p-2 text-center`}
`

export const MobileLinks = styled.div`
  ${tw`flex flex-col text-center`}
`

export const MobileLink = styled.a`
  ${tw`py-3 font-semibold text-white hover:text-orange transition-colors duration-300`}
`

export default NavigationSection
