import DisplayCounter from "./DisplayCounter";
import NoData from "./NoData";
import UpdateButton from "./UpdateButton";

const Page = () => {
  console.log("page");
  return (
    <>
      <DisplayCounter />
      <UpdateButton />
      <NoData />
    </>
  );
};
export default Page;
