import styled from "styled-components";
import React, {useState} from "react";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://thumbs.gfycat.com/HardtofindDecimalDugong-max-1mb.gif")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Logo = styled.h1`
    font-sixe: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color:'black' }}>
        <Logo>Dream Shake</Logo>
        </Link>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input 
           type="name"
           value={username}
           placeholder="Enter Username"
           onChange={(e) => setUsername(e.target.value)}
           />
          <Input
             type="email"
             value={email}
             placeholder="Enter email"
             onChange={(e) => setEmail(e.target.value)}
             />
          <Input 
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
       
          <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
          {error && <Error>Something went wrong...</Error>}
  
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;