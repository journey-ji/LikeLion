import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import CharacterCount from "./CharacterCount";
import { textState } from "./atom";

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
    </div>
  );
}
export default CharacterCounter;
