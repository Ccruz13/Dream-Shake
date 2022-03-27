import React from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

    const quantity = useSelector(state => state.cart.quantity)

    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                <Left>
                    Dream Shake
                </Left>
                </Link>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
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
    )
}

export default Navbar
