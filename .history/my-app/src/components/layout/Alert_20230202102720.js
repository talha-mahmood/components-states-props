import React from 'react'

const Alert = ({alert}) => {
  return (
    alert!=null && (
    <div className={`alert alert-${alert.type}`}>
      < className='fas fa-info-circle'/> 
    
    </div>
    )
    
  )
}

export default Alert
