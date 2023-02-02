import React from 'react'

const Alert = ({alert}) => {
  return (
    alert!=null && (
    <div className={`alert alert-${alert.type}`}>
      <i className=''
    
    </div>
    )
    
  )
}

export default Alert
