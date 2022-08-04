import styled from "styled-components";

const Layout = (props) => {
  return <SLayout>{props.children}</SLayout>;
};

export default Layout;

const SLayout = styled.section`
  position: relative;
  max-width: 700px;
  height: 100vh;
  margin: 0 auto;
`;
