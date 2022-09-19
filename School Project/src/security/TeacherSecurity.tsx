import React from 'react'
import { Navigate } from 'react-router-dom'
import { control } from '../util'



function TeacherSecurity(item:{component:JSX.Element}) {
    const jwt=control()
    let teacherRole=false
    if (jwt!==null) {
        jwt.result.authorities.map(item => {
            if (item.authority ==="ROLE_teacher") {
                teacherRole=true
            }
        })
        
     }
  return (
    teacherRole===false
    ?
    <Navigate to ='/' replace />
    :
    item.component
  )
}

export default TeacherSecurity