import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { control } from '../util'

function UserNameLogOut() {

  const navigate = useNavigate()  

  const fncLogout = () =>  {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    navigate('/')
  }

  const clearRole = (title: string) => {
    title = title.substring(5)
    return title
  }

  function capitalizeFirstLetter(str:string) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }

  return (
    <>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Role's
          </a>
            <ul className="dropdown-menu">
                {
                    control()!.result.authorities.map( (item, index) => 
                        <li key={index}><NavLink className="dropdown-item" to={ '/'+clearRole(item.authority) }>{ capitalizeFirstLetter(clearRole(item.authority)) }</NavLink></li>
                    )
                }                
            </ul>
        </li>
      

        <li className="nav-item">
            <a className="nav-link"  data-bs-toggle="modal" data-bs-target="#exampleModal" role='button'>Logout</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled">{ control()!.result.username }</a>
        </li>

        
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">User Logout</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Are you sure logout!
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button  data-bs-dismiss="modal" onClick={ fncLogout } type="button" className="btn btn-danger">Logout</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserNameLogOut