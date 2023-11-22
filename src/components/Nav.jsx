import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Nav.module.css';
import logo from '../assets/doctor_gaming.png';
import '../css/style.css';

import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';

function Nav() {
  const styles = {
    custom_logo: {
      height: '10vh',
      width: '5vw',
      backgroundColor: '#bbb',
      borderRadius: '50%',
      display: 'inline-block',
    },
  };
  return (
    <div className="container my-4">
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container-fluid">
          <NavLink to="home" className="navbar-brand nav-link">
            <div className={styles.custom_logo}>
              <img src={logo} className={styles.custom_logo} alt="Logo" width="200vw" />
            </div>
          </NavLink>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="saude_mental" className="nav-link">
                <h6 className="tlink">Saúde Mental</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="logout" className="nav-link">
                <h6 className="tlink">Logout</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="user" className="nav-link" id="posicao_nav">
                <h6 className="tlink_Carrinho">
                  <AiOutlineUser size={30} />
                </h6>
              </NavLink>
            </li>
            
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
