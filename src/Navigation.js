import React, {Fragment} from "react";
import {MenuItem, Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavItem} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";

export const Navigation =() => {
    return (
        <Fragment class='navigation'>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" >
                            <img width={100} height={30} alt="900x500" src="/src/logo.jpg" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            WOMEN
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            MEN
                        </NavItem>

                        <NavItem eventKey={3} href="#">
                            KIDS
                        </NavItem>

                        <NavItem eventKey={4} href="#">
                            ACCESSORIES
                        </NavItem>

                        <NavItem eventKey={5} href="#">
                            SPORTS
                        </NavItem>

                        <NavItem eventKey={6} href="#">
                            HOME AND LIVING
                        </NavItem>
                        <NavDropdown eventKey={3} title="OTHERS" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>O1</MenuItem>
                            <MenuItem eventKey={3.2}>O2</MenuItem>
                            <MenuItem eventKey={3.3}>O3</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>O4</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            SEARCH
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            FAVOURITES
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}