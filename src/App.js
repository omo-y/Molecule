import { PrimaryBotton } from "./components/atoms/button/PrimaryBotton";
import { SecondaryBotton } from "./components/atoms/button/SecondaryBotton";
import { SearchInput } from "./molecules/Searchinput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryBotton>テスト</PrimaryBotton>
      <SecondaryBotton>試験</SecondaryBotton>
      <br />
      <br />
      <SearchInput />
    </div>
  );
}
