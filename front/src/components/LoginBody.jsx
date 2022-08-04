import styled from "styled-components";

const LoginBody = () => {
  return (
    <Container>
      <STitle>이 편지는...</STitle>
      <SInput placeholder="Email" />
      <SInput placeholder="Password" />
      <LoginBtn>로그인</LoginBtn>

      <SignUp>
        <ForgotPass>Forgot Password</ForgotPass>
        <SignUpBtn>회원가입</SignUpBtn>
      </SignUp>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  background-color: #45e2f3;
`;

const STitle = styled.h1`
  padding-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  margin-left: 30px;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  border-radius: 22px;
  border: white;
`;

const LoginBtn = styled.button`
  margin-left: 100px;
  border-radius: 60px;
  border: white;
`;

const SignUp = styled.div`
  margin-top: 110px;
  margin-left: 30px;
`;

const ForgotPass = styled.span`
  font-size: 15px;
`;

const SignUpBtn = styled.button`
  margin-left: 10px;
  border: white;
  border-radius: 30px;
`;
export default LoginBody;
