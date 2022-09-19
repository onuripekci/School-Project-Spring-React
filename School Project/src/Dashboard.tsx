import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { control } from './util'


function dashboard() {

    const jwt = control()
    let role = ''
    const FncRouter = (role:string) => {
        if (role==='ROLE_manager') {
            return <Navigate to='/manager' replace/> 
        }
        if (role==='ROLE_teacher') {
            return <Navigate to='/teacher' replace/> 
        }

    }


    return (
        jwt === null
            ?
            <Navigate to='/' replace />
            :
            <>
                  {FncRouter(jwt.result.authorities[0].authority)}
            </>

    )
}

export default dashboard