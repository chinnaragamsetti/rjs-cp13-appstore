// Write your code here

import './index.css'

const AppItem = props => {
  const {eachdetails} = props
  const {appName, imageUrl} = eachdetails
  return (
    <li className="appcontainer">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="appname">{appName}</p>
    </li>
  )
}

export default AppItem
