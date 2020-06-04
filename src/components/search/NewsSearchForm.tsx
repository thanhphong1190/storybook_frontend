import { Button, ButtonLink } from '../base'
import {
  NewsSearchWrapper,
  NewsSearchGroup,
  NewsSearchTextInput,
  LabelIcon
} from './SearchForm.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

export interface NewsSearchFormProps {
  searchButtonText?: string
  searchPlaceHolder?: string
  displaySearch: boolean
  onSearchClose: Function
  onSearchClick: Function
}

export const NewsSearchForm = (props: NewsSearchFormProps) => {
  const { searchButtonText, searchPlaceHolder, onSearchClose, onSearchClick, displaySearch } = props

  return (
    <NewsSearchWrapper isDisplay={displaySearch}>
      <LabelIcon>
        <FontAwesomeIcon icon={faSearch} />
      </LabelIcon>
      <NewsSearchGroup>
        <NewsSearchTextInput placeholder={searchPlaceHolder || ''} />
        <Button onClick={() => onSearchClick()} color='white'>
          {searchButtonText || 'Search'}
        </Button>
        <ButtonLink onClick={() => onSearchClose()}>
          <FontAwesomeIcon icon={faTimes} />
        </ButtonLink>
      </NewsSearchGroup>
    </NewsSearchWrapper>
  )
}

export default NewsSearchForm
