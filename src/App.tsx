import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
  max-width: 800px;
`;

const App: FC = () => {
  return <Container>Welcome to my application.</Container>;
};

export default App;
