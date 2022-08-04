import styled from "styled-components";

const SideMenu = () => {
  return (
      <SideHeader>
        <ul>
          <li>로그아웃</li>
          <li>열어본 유리병</li>
          <li>만든 사람들</li>
        </ul>
      </SideHeader>
  )
}

const SideHeader = styled.div`
  margin-top: 77px;
  text-align: center;

  & li {
    padding: 20px;
    cursor: pointer;
    transition: 0.5s;
    font-weight: 700;
    font-size: 20px;

    &:hover {
      background-color: #445dd2;
      color: white;
    }
  }
`

export default SideMenu