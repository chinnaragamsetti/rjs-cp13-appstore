// Write your code here

import './index.css'

const TabItem = props => {
  const {eachdetails} = props
  const {tabId, displayText} = eachdetails
  return (
    <li>
      <p className="tab">{displayText}</p>
    </li>
  )
}

export default TabItem
