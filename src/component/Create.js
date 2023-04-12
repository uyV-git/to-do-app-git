import styled from 'styled-components';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const CreateDiv = styled(motion.div)`
  width: 100%;
  overflow: scroll;
`

const ContentBox = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  
`

const WriteDown = styled.textarea`
  height: 100px;
  margin-bottom: 20px;
  resize: none;
  border-radius: 20px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-right: 20px;
    border: none;
    border-radius: 20px;
    background-color: #2f3134;
    color: #fff;
    padding: 10px;
    width: 100px;
    cursor: pointer;
    

    &:last-of-type {
      margin-right: 0;
    }
  }
`

const animate = {
  initial: {
    transform: `translateY(50px)`,
    opacity: 0,
    transition: `transform 0.33s ease`
  },
  animate: {
    transform: `translateY(0px)`,
    opacity: 1,
    transition: `transform 0.33s ease`
  },
  exit: {
    transform: `translateY(50px)`,
    opacity: 0,
    transition: `transform 0.33s ease`
  }
}

function Create({ newMsg, handleChangeMsg, handleCreateBtn }) {
  const navigate = useNavigate();

  const onClickCreated = () => {
    navigate('/allnotes');
  }

  const onClickCancel = () => {
    navigate('/allnotes');
  }


  return (
    <CreateDiv
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}>
      <ContentBox>
        <Title>Create Plans</Title>
        <WriteDown
          value={newMsg}
          onChange={handleChangeMsg}
          placeholder='Write Here!'
        ></WriteDown>
        <Buttons>
          <button onClick={() => {
            handleCreateBtn();
            onClickCreated();
          }}>Create</button>
          <button onClick={onClickCancel}>Cancel</button>
        </Buttons>
      </ContentBox>
    </CreateDiv>
  )

}

export default Create;