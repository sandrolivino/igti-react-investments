import InvestmentsPage from "./pages/InvestmentsPage";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Header>React Investments</Header>
      <Main>
        <InvestmentsPage />
      </Main>
    </>
  );
}
