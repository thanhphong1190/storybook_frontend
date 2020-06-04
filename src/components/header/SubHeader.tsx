import { SelectOption } from '../../services/api/types'
import { SORT_OPTIONS, SORT_PLACEHODLER } from '../../services/api/constants'
import {
  SubHeaderWrapper,
  SubHeaderStyled,
  DropdownStyled
} from './SubHeader.styled'

export interface SubHeaderProps {
  subHeaderText: string
  showDropdown: boolean
  showSeparator: boolean
  dropdownOptions?: Array<SelectOption>
  dropdownPlaceholder?: string
}

export const SubHeader = (props: SubHeaderProps) => {
  const {
    subHeaderText,
    dropdownPlaceholder,
    dropdownOptions,
    showDropdown,
    showSeparator
  } = props

  return (
    <SubHeaderWrapper>
      <SubHeaderStyled hasDropdown={showDropdown} separator={showSeparator}>
        {subHeaderText}
      </SubHeaderStyled>

      {showDropdown ? (
        <DropdownStyled
          options={dropdownOptions || SORT_OPTIONS}
          placeholder={dropdownPlaceholder || SORT_PLACEHODLER}
        />
      ) : (
        ''
      )}
    </SubHeaderWrapper>
  )
}

export default SubHeader
