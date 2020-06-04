import { Button } from '../base'
import {
  LocationSearchWrapper,
  SearchFormGroup,
  SearchLabel,
  AsyncSelectStyled
} from './SearchForm.styled'
import { SelectOption } from '../../services/api/types'

export interface LocationSearchFormProps {
  locationOptions: Array<SelectOption>
  searchLabel: string
  searchPlaceHolder: string
  searchButtonText: string
}

export const LocationSearchForm = (props: LocationSearchFormProps) => {
  const {
    locationOptions,
    searchLabel,
    searchButtonText,
    searchPlaceHolder
  } = props

  const filterLocations = (inputValue: string) => {
    return locationOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    )
  }

  // TODO: This function will be replaced when hook with the APIs to get the locations
  const promiseOptions = (inputValue: string) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterLocations(inputValue))
      }, 1000)
    })

  return (
    <LocationSearchWrapper>
      <SearchLabel htmlFor='searchText'>{searchLabel}</SearchLabel>
      <SearchFormGroup>
        <AsyncSelectStyled
          id='searchText'
          placeholder={searchPlaceHolder}
          loadOptions={promiseOptions}
        />
        <Button>{searchButtonText}</Button>
      </SearchFormGroup>
    </LocationSearchWrapper>
  )
}

export default LocationSearchForm
