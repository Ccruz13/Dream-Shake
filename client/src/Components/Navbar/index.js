import React from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = () => {

    const Container = styled.div`
        height: 60px;
    `
    const Wrapper = styled.div`
        padding: 15px 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `
    const Left = styled.h1`
        font-weight: Bold;
    `;
    const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `;

    const MenuItem = styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
    `;
    return (
        <Container>
            <Wrapper>
                <Left>
                    Dream Shake
                </Left>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
