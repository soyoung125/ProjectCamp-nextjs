import { CounterContextProvider } from "./components/context/CountContext";
import Page from "./components/learn/Page";

const App = () => {
  return (
    <CounterContextProvider>
      <Page />
    </CounterContextProvider>
  );
};
export default App;
