import { createContext, useContext } from "react";
import Jour from "./Jour";
const UserInfo = createContext({
  name: "재현",
  age: "35",
});
function App() {
  const { name, age } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{age}</strong>
      <Jour />
    </div>
  );
}
export default App;

/*
음 ,,, 예제를 뭘로 하면 좋을까 ?
영화관 ?
각 층별 ,, 상영관 별 좌석 



*/
