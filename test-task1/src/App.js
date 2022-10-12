import { MainLayout } from "./styled";
import ExcursionCard from "./components/ExcursionCard";

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
