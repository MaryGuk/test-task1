import logo from "./logo.svg";
import ExcursionCard from "./components/ExcursionCard";
import { MainLayout } from "./styled";

function App() {
  return (
    <MainLayout>
      <ExcursionCard />
      <ExcursionCard />
      <ExcursionCard />
    </MainLayout>
  );
}

export default App;
