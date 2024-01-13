// Write your code here

import './index.css'

const TabItem = props => {
  const {eachdetails, onChangeTab, isActive} = props
  const {tabId, displayText} = eachdetails
  const onChangetab = () => {
    onChangeTab(tabId)
  }
  const isActivetablist = isActive ? 'selectedtablist' : ''
  const isActivepara = isActive ? 'selectedtab' : ''
  return (
    <li className={`eachtablist ${isActivetablist}`}>
      <button type="button" className="button" onClick={onChangetab}>
        <p className={`tab${isActivepara}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
