// Write your code here

import './index.css'

const TabItem = props => {
  const {eachdetails, onChangeTab} = props
  const {tabId, displayText} = eachdetails

  const onChangetab = () => {
    onChangeTab(tabId)
  }
  return (
    <li className="eachtablist">
      <button type="button" className="button" onClick={onChangetab}>
        <p className="tab">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
