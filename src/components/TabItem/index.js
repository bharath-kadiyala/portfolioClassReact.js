import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? `active-tab-btn` : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        onClick={onClickTabItem}
        type="button"
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
