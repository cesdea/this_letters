import styled from "styled-components";

const MenuBtn = ({openMenu}) => {
  return (
    <SMenu onClick={openMenu}>
      <SMenuBtn>
        <SDash/>
        <SDash/>
        <SDash/>
      </SMenuBtn>
    </SMenu>
  )
}

const SMenu = styled.div`
  margin-right: 10px;
`

const SMenuBtn = styled.div`
  cursor: pointer;
  padding: 10px;
`

const SDash = styled.div`
  transition: 0.5s;
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 7px 0;
  border-radius: 3px;
  ${SMenuBtn}:hover &:first-child {
    transform:translateY(10px) rotate(225deg) ;
  }
  ${SMenuBtn}:hover &:last-child {
    transform:translateY(-10px)  rotate(-225deg);
  }
  ${SMenuBtn}:hover &:nth-child(2) {
    opacity: 0;
  }
`

export default MenuBtn