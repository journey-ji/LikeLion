import { RecoilRoot } from "recoil";

import CharacterCounter from "./components/CharacterCounter";
import CharacterCount from "./components/CharacterCount";
function App() {
  return (
    <RecoilRoot>
      <CharacterCount />
      <CharacterCounter />
    </RecoilRoot>
  );
}
export default App;
