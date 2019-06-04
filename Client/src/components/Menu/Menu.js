import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom"
import './Menu.css';
/*
    Change to landing page should contain
        - A sidebar menu with options for
            - Student Dashboard
            - Activity Dashboard
            - Class Dashboard
        - Cards with class information
            -missed assingments
            -completed assingments
            -messages from parents
            -and activities that instructor created.

*/


class Menu extends Component {
    render() {
        return (
            <div>
                <SideNav onSelected={(selected) => { }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="/" >
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="students">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart"></i>
                            </NavIcon>
                            <NavText>
                                Students
                            </NavText>
                        </NavItem>

                        
                    </SideNav.Nav>
                </SideNav>
            </div>


        );
    };
};

export default Menu;
