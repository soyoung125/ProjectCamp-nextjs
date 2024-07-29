export default function page(props: {
  params: { id: string; reviewid: string };
  searchParams: {};
}) {
  console.log(props);
  return (
    <div>
      <h1>
        page id: {props.params.id} reviewId: {props.params.reviewid}
      </h1>
    </div>
  );
}
