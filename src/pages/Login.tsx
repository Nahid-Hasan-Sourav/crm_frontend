import Button from "../components/Button";
import TextInput from "../components/TextInput";


export default function Login() {
  // Define a click handler function
  

  return (
    <div>
      <Button
        text="Login"
        className="text-2xl bg-blue-500 hover:bg-blue-700"
      />
      <TextInput
  value="This is disabled"
  onChange={() => {}}
  placeholder="Cannot change this"
  disabled={true}
  className="bg-gray-200 border-gray-300"
/>

    </div>
  );
}
