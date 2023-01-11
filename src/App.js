import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Orders from "./components/Orders";
import Prototypes from "./components/Prototypes";
import styled from "styled-components";
import AppStateProvider from "./providers/AppStateProvider";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  display: flex;
  /* flex-direction: column; */
  min-height: 100vh;
  max-width: 1000px;
  /* background-color: #f1f1f1; */
  /* background-color: var(--primary); */

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 0.7fr 0.3fr;
      grid-template-rows: auto 1fr auto;
    }
  }
`;

function App() {
  return (
    <AppStateProvider>
      <Header />
      <Container>
        <Prototypes />
        <Orders />
      </Container>
      <Footer />
    </AppStateProvider>
  );
}

export default App;
