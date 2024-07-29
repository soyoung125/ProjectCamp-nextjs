export default function BlogsRecentpage(props: {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}) {
  return (
    <div>
      <h1>Blog {props.params.id} Recent Component</h1>
    </div>
  );
}
