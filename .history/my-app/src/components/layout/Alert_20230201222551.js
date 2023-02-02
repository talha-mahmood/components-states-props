import React from 'react'

const Alert = ({alert}) => {
  return (
    alert!=null && (
    <div className={'alert alert-${alert.ty}'}>
      
    </div>
    )
    
  )
}

export default Alert
