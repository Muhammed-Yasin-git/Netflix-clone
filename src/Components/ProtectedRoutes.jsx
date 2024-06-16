import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

function ProtectedRoutes({children}) {

    const {user} = useAuth()
    if(!user){

        return (
          <Navigate to='/' />
        )
      }else{
        return children
      }
    }


export default ProtectedRoutes
