import React, {useRef} from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import Letter from "../components/Letter";

const Coast = () => {
  const sidebar = useRef()
  const letterModal = useRef()
  const openLetter = () => {
    letterModal.current.style.top = "100%"
    if(letterModal.current.style.top === "100%") {
      letterModal.current.style.top = "50%"
      letterModal.current.style.transform = "translate(-50%, -50%)"
    }
  }
  return (
    <Layout>
      <SWrapper>
        <Header sidebar={sidebar}/>
        <SSideBar ref={sidebar}>
          <SideMenu />
        </SSideBar>
        <SMain>
          <SMessage/>
          <SButton onClick={openLetter}>
            유리병 띄우기
          </SButton>
          <SSendModal ref={letterModal}>
            <Letter letterModal={letterModal}/>
          </SSendModal>
        </SMain>
      </SWrapper>
    </Layout>
  );
};

const SMain = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/assets/images/coast.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`

const SWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const SMessage = styled.div`
  background-image: url("/assets/images/message_purple.png");
  background-size: cover;
  width: 75px;
  height: 75px;
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
`

const SButton = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 60px;
  border: none;
  font-size: 24px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  
  &:hover {
    color: white;
  }

  &:hover::before {
    left: -300px;
  }

  &::before {
    transition: 0.5s;
    position: absolute;
    content: "";
    width: 600px;
    height: 60px;
    top: 0;
    left: 0;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    z-index: -1;
  }
`

const SSideBar = styled.div`
  position: absolute;
  top: 0;
  right: -200px;
  width: 200px;
  height: 300px;
  z-index: 10;
  border-radius: 0 0 0 30px;
  transition: 0.5s;
  background-color: #ececec;
`

const SSendModal = styled.div`
  transition: 0.5s;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 560px;
  height: 843px;
  background-image: url("/assets/images/letter.png");
  background-size: auto;
  background-repeat: no-repeat;
  z-index: 12;
`
export default Coast;
