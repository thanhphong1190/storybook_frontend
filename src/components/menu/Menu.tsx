import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { MenuWrapper, MenuItem, AdditionalMenuStyled } from './Menu.styled'
import { NewsSearchForm } from '../search'

export interface MenuProps {
  menuItems: Array<MenuItem>
}

export interface MenuItem {
  label: string
  url?: string
}

export const Menu = (props: MenuProps) => {
  const { menuItems } = props
  const [displaySearch, setDisplaySearch] = useState(false)

  const onItemClick = () => {}
  const showSearchBar = () => {
    setDisplaySearch(!displaySearch)
  }
  const onSearchClick = () => {}

  return (
    <>
     <AdditionalMenuStyled>
        <NewsSearchForm
          displaySearch={displaySearch}
          onSearchClick={onSearchClick}
          onSearchClose={showSearchBar}
        />
      </AdditionalMenuStyled>
      <MenuWrapper>
        {menuItems &&
          menuItems.map((item: MenuItem, idx) => {
            return (
              <MenuItem key={idx} onClick={onItemClick}>
                {item.label}
              </MenuItem>
            )
          })}
        <MenuItem onClick={showSearchBar}>
          <FontAwesomeIcon icon={faSearch} />
        </MenuItem>
      </MenuWrapper>
    </>
  )
}

export default Menu
