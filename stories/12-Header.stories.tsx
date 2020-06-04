import React from 'react'
import {
  Header,
  HeaderProps,
  SubHeader,
  SubHeaderProps
} from '../src/components/header'

const props: HeaderProps = {
  CTATitle: 'Find your plus fitness location',
  Titles: ['24/7 open gym -', 'no lock in contracts'],
  buttonLabel: 'Search',
  buttonAction: '#',
  searchInputProps: {
    placeholder: 'Type your suburb or post code'
  }
}

const locationSubHeaderProps: SubHeaderProps = {
  subHeaderText: 'GYM IN NSW',
  showDropdown: true,
  showSeparator: true,
}

const newsResultProps: SubHeaderProps = {
  subHeaderText: 'NEVER STOP LEARNING...',
  showDropdown: true,
  showSeparator: true
}

const newsTitleProps: SubHeaderProps = {
  subHeaderText: 'THE TRUTH ABOUT BMI',
  showDropdown: false,
  showSeparator: true,
}

export const HeaderNav = () => <Header {...props} />

export const locationSubHeader = () => <SubHeader {...locationSubHeaderProps} />

export const newsResultHeader = () => <SubHeader {...newsResultProps} />

export const newsTitle = () => <SubHeader {...newsTitleProps} />

export default {
  title: 'Header',
  component: HeaderNav
}
