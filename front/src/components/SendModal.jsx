import styled from "styled-components";
import {useRef} from "react";
// import {useRef} from "react";

const SendModal = ({letterModal}) => {
  const textarea =useRef()
  const closeLetter = ()=> {
    letterModal.current.style.top = "100%"
    letterModal.current.style.transform = "translate(-50%, 0)"
    textarea.current.value = ""
  }
  return (
    <SSendModal>
      <div className={"receiver"}>받는사람 에게...</div>
      <div className="textareaWrapper">
        <textarea ref={textarea} placeholder={"안녕 잘 지내니?"}/>
      </div>
      <div className="buttonBox">
        <button>편지 색깔 바꾸기</button>
        <button>편지 보내기</button>
      </div>
      <button onClick={closeLetter} className="closeButton">닫기</button>
    </SSendModal>
  )
}


const SSendModal = styled.div`
  padding: 20px;
  margin-top: 5%;
  position: relative;
  & .receiver {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  & .textareaWrapper {
    padding: 30px 10px;
  }

  & textarea {
    width: 100%;
    height: 600px;
    font-size: 20px;
    resize: none;
    &:active {
      outline: none;
    }
    &:focus {
      outline: none;
    }
  }
  
  & .closeButton {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
  }

  & .buttonBox {
    display: flex;
    justify-content: space-around;

    & button {
      width: 150px;
      height: 50px;
      border: 1px solid black;
      border-radius: 20px;
    }
  }
`
export default SendModal