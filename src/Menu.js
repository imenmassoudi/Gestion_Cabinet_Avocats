import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
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

                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-header">Gestion des utilisateurs</li>
                                <li className="nav-item">
                                    <Link to="/user" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>Utilisateurs</p>
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
}