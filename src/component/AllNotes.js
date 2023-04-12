import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const NotesDiv = styled(motion.div)`
  width: 100%;
  overflow: scroll;
`

const ContentBox = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`

`

const CreateBtn = styled.button`
  width: 100px;
  border: none;
  background-color: #2f3134;
  color: #fff;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
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

  button.likeBtn {
    margin-right: 20px;
  }
`

// const tasks = [
//   { id: 1, content: 'Read work emails' },
//   { id: 2, content: 'Take out the bins' },
//   { id: 3, content: 'Change oil in car' },
//   { id: 4, content: 'Call back to boss' },
//   { id: 5, content: 'Send report to Frank' },
//   { id: 6, content: 'Pick up the groceries' },
// ]

// const lists = tasks.map((list) => (
//   <ListElement>
//     {list.content}
//     <div className="buttons">
//       <button className="likeBtn">&hearts;</button>
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

function AllNotes({ notes }) {
  const navigate = useNavigate();

  const onClickCreate = () => {
    navigate('/create');
  }

  return (
    <NotesDiv
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}>
      <ContentBox>
        <TitleBox>
          <Title>All Notes</Title>
          <CreateBtn onClick={onClickCreate}>Create</CreateBtn>
        </TitleBox>
        <List>
          {/* {lists} */}
          {notes && notes.map((list) => (
            <ListElement>
              {list.content}
              <div className="buttons">
                <button className="likeBtn">&hearts;</button>
                <button className="deleteBtn">&times;</button>
              </div>
            </ListElement>
          ))}
        </List>
      </ContentBox>
    </NotesDiv>
  )
}

export default AllNotes;