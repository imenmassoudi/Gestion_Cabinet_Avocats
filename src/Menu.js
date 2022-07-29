import React, { Component } from 'react'
import {Link} from "react-router-dom";
const Menu = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to="/" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">Avocats</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2"
                                 alt="User Image"/>
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">{localStorage.getItem("user")}</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-header">Gestion des utilisateurs</li>
                            <li className="nav-item">
                                <Link to="/user" className="nav-link">
                                    <i className="nav-icon fas fa-angellist" />
                                    <p>Utilisateurs</p>
                                </Link>
                            </li>

                           
                            <li className="nav-header">liste des tribunaux</li>
                                    <li className="nav-item">
                                        <Link to="/tribunaux" className="nav-link">
                                            <i className="nav-icon fas fa-building"></i>
                                            <p>Tribunaux</p>
                                        </Link>
                                    </li>
                                    <li className="nav-header">collaborateur</li>
                                <li className="nav-item">
                                    <Link to="/collaborateur" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>liste des Collaborateurs</p>
                                    </Link>
                                </li>

                                <li className="nav-header">greffier</li>
                                <li className="nav-item">
                                    <Link to="/greffier" className="nav-link">
                                        <i className="nav-icon fas fa-cogs" />
                                        <p>liste des Greffiers</p>
                                    </Link>
                                </li>

                                <li className="nav-header">prime greffier</li>
                                <li className="nav-item">
                                    <Link to="/primegreffier" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>liste des primes greffier</p>
                                    </Link>
                                </li>
                                <li className="nav-header">dossier</li>
                                <li className="nav-item">
                                    <Link to="/typedossier" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>type dossier</p>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/emplacement" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>emplacement dossier</p>
                                    </Link>
                                </li>
                                
                                <li className='nav-item'>
                                     <Link to='/param_global' className='nav-link'>
                                         <i class='nav-icon fas fa-cogs'></i>
                                        <p>Parametre Global</p>
                                     </Link>
                                 </li>
                                <li className='nav-item'>
                                    <Link to='/honoraire_extra' className='nav-link'>
                                      <i class='nav-icon fas fa-sliders-h'></i>
                                      <p>Honoraire en extra</p>
                                 </Link>
                                </li>
                                 <li className='nav-item'>
                                     <Link to='/recette_finance' className='nav-link'>
                                       <i class='nav-icon fas fa-file-invoice-dollar'></i>
                                        <p>Recette de Finance</p>
                                    </Link>
                                 </li>
                                 <li className='nav-item'>
                                  <Link to='/timbre' className='nav-link'>
                                    <i class='nav-icon fas fa-mail-bulk'></i>
                                    <p>Timbre</p>
                                  </Link>
                              </li>
                           
                              
                              


                           
                                
                          
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>

    )
}
export default Menu