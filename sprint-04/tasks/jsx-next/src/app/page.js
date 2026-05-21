import MyLabel from "./components/MyLabel";
import MyInput from "./components/MyInput";
import MyButton from "./components/MyButton";

export default function Home() {
  return (
    <div data-testid="element-app">
      <MyLabel />
      <MyInput />
      <MyButton />
    </div>
  );
}
