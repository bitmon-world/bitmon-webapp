import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class NavBarComponent extends React.Component<any, any> {
    render() {
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Bitmon</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/games/breed">Breed</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/games/fight">Fight</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/games/capture">Capture</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }

}
