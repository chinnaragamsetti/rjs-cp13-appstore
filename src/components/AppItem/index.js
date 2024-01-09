// Write your code here


import './index.css'


const AppItem=props=>{
    const {eachdetails}=prop 
    const {appId,appName,imageUrl,category}=eachdetails
    return(
        <div className='appcontainer'>
            <img src={imageUrl className='image'}/>
            <p className='appname'>{appName}</p>
        </div>
    )
}

export default AppItem