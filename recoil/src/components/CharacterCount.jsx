import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { charCountState } from "./atom";
function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Char Count: {count}</>;
}
export default CharacterCount;
