import React, { useState, useEffect } from 'react';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink 
} from './Navbar.elements';

import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';   
import { Button } from '../../globalStyles';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);


    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                        <NavIcon />
                        Uniducation
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products'>Products</NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/signup">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/signup">
                                    <Button fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
