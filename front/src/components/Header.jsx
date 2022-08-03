import React, {useRef} from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import MenuBtn from "./MenuBtn";
const Header = ({sidebar}) => {
  const navigate = useNavigate()
  const goCoast = () => {
    navigate("/")
  }

  const openMenu = () => {
    if(sidebar.current.style.right === "0px") {
      sidebar.current.style.right = "-200px"
    } else {
      sidebar.current.style.right = "0px"
    }
  }
  return (
      <SHeader>
        <SLogo onClick={goCoast}>
          <img src="/assets/images/logo.PNG" alt=""/>
        </SLogo>
        <MenuBtn openMenu={openMenu} />
      </SHeader>
  );
};

const SHeader = styled.header`
  position: fixed;
  max-width: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  z-index: 11;
`

const SLogo = styled.div`
  cursor: pointer;
  font-weight: 700;
  height: 57px;
  width: 100px;
  padding: 10px;
  margin-left: 20px;
  
  & > img{
    object-fit: cover;
  }
`



export default Header;
