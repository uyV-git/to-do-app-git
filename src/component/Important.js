import styled from 'styled-components';
import { motion } from "framer-motion";

const ImportantDiv = styled(motion.div)`
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

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListElement = styled.li`
  background-color: rgba(245, 245, 245, 0.5);
  box-shadow: 5px 5px 5px #d9d9d9;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
   
  &:last-of-type {
    margin-bottom: 0;
  }

  button {
    border: none;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
`

// const importantTasks = [
//   { id: 1, content: 'Change oil in car' },
//   { id: 2, content: 'Call back to boss' },
//   { id: 3, content: 'Send report to Frank' },
// ]

// const lists = importantTasks.map((list) => (
//   <ListElement>
//     {list.content}
//     <div className="buttons">
//       <button className="deleteBtn">&ndash;</button>
//     </div>
//   </ListElement>
// ))

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

function Important({ important }) {
  return (
    <ImportantDiv
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}>
      <ContentBox>
        <Title>Important</Title>
        <List>
          {/* {lists} */}
          {important && important.map((list) => (
            <ListElement>
              {list.content}
              <div className="buttons">
                <button className="deleteBtn">&ndash;</button>
              </div>
            </ListElement>
          ))}
        </List>
      </ContentBox>
    </ImportantDiv>
  )

}

export default Important;