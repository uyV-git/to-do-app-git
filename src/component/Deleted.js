import styled from 'styled-components';
import { motion } from "framer-motion";

const DeletedDiv = styled(motion.div)`
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

// const deletedTasks = [
//   { id: 1, content: 'Review subscripttions' },
//   { id: 2, content: 'Make a reservation for holiday' },
//   { id: 3, content: 'Update my budget' },
// ]

// const lists = deletedTasks.map((list) => (
//   <ListElement>
//     {list.content}
//     <div className="buttons">
//       <button className="deleteBtn">&times;</button>
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

function Deleted({ deleted }) {
  return (
    <DeletedDiv
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}>
      <ContentBox>
        <Title>Deleted</Title>
        <List>
          {/* {lists} */}
          {deleted && deleted.map((list) => (
            <ListElement>
              {list.content}
              <div className="buttons">
                <button className="deleteBtn">&times;</button>
              </div>
            </ListElement>
          ))}
        </List>
      </ContentBox>
    </DeletedDiv>
  )
}

export default Deleted;