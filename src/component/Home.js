import styled from "styled-components";
import { motion } from "framer-motion";

const HomeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  width: 100%;

  div {
    font-weight: bold;
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

function Home({ isOpen, setMenu }) {
  return (
    <HomeDiv
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <div>Write down your ideas!</div>
      <div>👈 Select what you want</div>
    </HomeDiv>
  )
}

export default Home;