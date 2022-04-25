import React from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../../redux/userRedux';

const Navbar = () => {

    const Container = styled.div`
        height: 60px;
        ${mobile({ height: "50px" })}
    `
    const Wrapper = styled.div`
        padding: 15px 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${mobile({ padding: "10px 0px" })}
    `
    const Left = styled.h1`
        font-weight: Bold;
        
        ${mobile({ fontSize: "24px" })}
    `;
    const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ${mobile({ flex: 2, justifyContent: "center" })}
    `;

    const MenuItem = styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    `;

    const Button = styled.button`
    width: 10%;
    border: none;
    padding: 10px 10px;
    background-color: white;
    color: black;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 20px;
    `;

    const quantity = useSelector(state => state.cart.cartTotalQuantity)
    const user = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(logout());
      };
    return (
        <div>
            {user ?
                <Container>
                    <Wrapper>
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <Left>
                                Dream Shake
                            </Left>
                        </Link>
                        <Right>
                            <Button onClick={handleClick}>
                                <p>Logout</p>
                            </Button>
                            <Link to="/cart">
                                <MenuItem>
                                    <Badge badgeContent={quantity} color="primary">
                                        <ShoppingCartOutlined />
                                    </Badge>
                                </MenuItem>
                            </Link>
                        </Right>
                    </Wrapper>
                </Container>
                :
                <Container>
                    <Wrapper>
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <Left>
                                Dream Shake
                            </Left>
                        </Link>
                        <Right>
                            <Link to="/register">
                                <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link to="/login">
                                <MenuItem>SIGN IN</MenuItem>
                            </Link>
                            <Link to="/cart">
                                <MenuItem>
                                    <Badge badgeContent={quantity} color="primary">
                                        <ShoppingCartOutlined />
                                    </Badge>
                                </MenuItem>
                            </Link>
                        </Right>
                    </Wrapper>
                </Container>
            }
        </div>
    )
}

export default Navbar
