import { LocationTabWrapper, LocationTabItem } from './LocationTab.styled'

export interface LocationTabProps {
  tabItems: Array<TabItem>
  tabClick?: Function
}

export interface TabItem {
  label: string
  url?: string
}

export const LocationTab = (props: LocationTabProps) => {
  const { tabItems, tabClick } = props

  return (
    <LocationTabWrapper>
      {tabItems &&
        tabItems.map((tab: TabItem, idx) => {
          return (
            <LocationTabItem
              key={idx}
              onClick={() => {
                tabClick && tabClick(tab)
              }}
            >
              {tab.label}
            </LocationTabItem>
          )
        })}
    </LocationTabWrapper>
  )
}

export default LocationTab
