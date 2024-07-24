import Input from "./components/example/ex3/Input";
import Button from "./components/example/ex3/Button";
import CustomInput from "./components/html/CustomInput";
import CustomButton from "./components/html/CustomButton";

const App = () => {
  return (
    <>
      <Input />
      <Button color="#7D48ED" textColor="#F5F5F5" width="100px">
        Add
      </Button>

      <div className="flex justify-center items-center min-h-screen flex-col gap-1">
        <CustomInput
          className="text-red-500"
          type="text"
          placeholder="Enter Todo List"
        />
        <CustomButton className="bg-[#4f4f4f]" type="button">
          Add
        </CustomButton>

        <CustomButton className="bg-[#ED4848]" type="button">
          Cancel
        </CustomButton>

        <CustomButton className="bg-[#7D48ED]" type="button">
          Success
        </CustomButton>
      </div>
    </>
  );
};
export default App;
