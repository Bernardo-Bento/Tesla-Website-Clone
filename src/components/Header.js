import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

    const [openedMenu, setOpenedMenu] = useState(false);
    const cars = useSelector(selectCars);
    return (
        <HeaderContainer>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <CenterMenu>
                <p><a href="#">Model Y</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model X</a></p>

            </CenterMenu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setOpenedMenu(true)} />
            </RightMenu>

            <BurgerNav show={openedMenu}>
                <CloseWrapper>
                    <CloseButton onClick={() => setOpenedMenu(false)}>
                        <CloseIcon />
                    </CloseButton>
                </CloseWrapper>
                <li><a href="#" >Existing Inventory</a></li>
                <li><a href="#" >Used Inventory</a></li>
                <li><a href="#" >Trade-in</a></li>
                <li><a href="#" >Cybertruck</a></li>
                <li><a href="#" >Existing Inventory</a></li>
                <li><a href="#" >Roadster</a></li>
                <li><a href="#" >Existing Inventory</a></li>
                <li><a href="#" >Existing Inventory</a></li>
            </BurgerNav>


        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    padding:0px 50px;
    min-height: 60px;
    position: fixed;
    align-items: center;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;

`
const CenterMenu = styled.div`
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;

    p {
        font-weight: 600;
        font-size: 20px;
        padding: 0px 10px;
    }

    @media (max-width: 930px){
        display: none;
    }
`

const RightMenu = styled.div`
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        padding: 0px 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    display: flex;
    cursor: pointer;
   
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'} ;
    transition: transform 0.2s ;
    li{
        font-size: 20px;
        padding: 10px 0px;
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
    a{
        font-weight:600;
    }
    

`
const CloseWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const CloseButton = styled(CloseIcon)`
   cursor: pointer;
`

