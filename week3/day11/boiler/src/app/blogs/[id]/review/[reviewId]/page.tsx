export default function BlogReviewPage(props: {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}) {
  return (
    <div>
      <h1>
        Blog {props.params.id} Review {props.params.reviewId} Component,
      </h1>
      <h1>
        language - {props.searchParams.lang}, order - {props.searchParams.order}
      </h1>
    </div>
  );
}
