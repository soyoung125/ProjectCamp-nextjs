import { useParams, useSearchParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  console.log(params);
  console.log(searchParams.get("lang"));

  return (
    <>
      <h1>Detail Component: {params.id}</h1>
    </>
  );
};
export default Detail;
