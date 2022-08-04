import Layout from "../components/Layout";
//import LoginHeader from "../components/LoginHeader";
import styled from "styled-components";
import LoginBody from "../components/LoginBody";

const Login = () => {
  return (
    <Layout>
      <SWrap>
        <SContainer>
          <div style={{ width: "50%", backgroundColor: "white" }}></div>
          <LoginBody />
        </SContainer>
      </SWrap>
    </Layout>
  );
};

export default Login;

const SContainer = styled.div`
  width: 500px;
  height: 40vh;
  //border: 2px solid black;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #eee;
  opacity: 80%;
`;

const SWrap = styled.section`
  background-image: url("/assets/images/bottlepaper.webp");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  padding-top: 20vh;
  box-sizing: border-box; //padding을 줬을때 높이가 달라짐(총높이 100% - 20vh)
`;
