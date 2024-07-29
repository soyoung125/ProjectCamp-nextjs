"use client";
import { useParams, useSearchParams, usePathname } from "next/navigation";

export default function BlogPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <h1>Blog Component {params.id}</h1>
    </div>
  );
}
