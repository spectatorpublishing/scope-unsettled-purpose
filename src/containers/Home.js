import Navbar from "../components/Navbar";
import Heading from "./Heading";
import LetterEditor from "../components/LetterEditor";
import NewArticles from "../components/NewArticles";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: black;
`;

const Home = () => {
    return (
      <Wrapper>
        <Navbar/>
        <Heading/>
        <LetterEditor />
        {/* <Articles/> */}
        <NewArticles />
      </Wrapper>
    );
  };
  
  export default Home;