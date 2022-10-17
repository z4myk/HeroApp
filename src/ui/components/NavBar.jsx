import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import {startLogout} from '../../store/auth/thunks'
import {useCheckAuth} from '../../heroes/hooks/useCheckAuth'
export const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {status, currentUser} = useCheckAuth();
    console.log(status)
    const {user, logout} = useContext(AuthContext)
    const isActive = ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`

    const onLogout = () => {    
        dispatch(startLogout())
        navigate('/login', {
            replace: false
        })
        
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={isActive}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={isActive} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={isActive} 
                        to="/search"
                    >
                       Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                            {currentUser.displayName}
                        </span>
                    <button 
                     onClick={onLogout}
                    className="btn nav-item nav-link text-danger">
                   
                        Logout
                        </button>
                </ul>
            </div>
        </nav>
    )
}