export default function ProductDetailPage(props: {
  params: { id: string };
  searchParams: { lang: string; order: string };
}) {
  console.log(props);
  return (
    <div>
      <h1>Product Detail Page {props.params.id}</h1>
    </div>
  );
}
