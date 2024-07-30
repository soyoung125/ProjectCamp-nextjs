import { format } from "date-fns";

export const revalidate = 0;
export default function APage() {
  return (
    <>
      <h1>APage</h1>
      <h2>APage: {format(new Date(), "HH:mm:ss")}</h2>
    </>
  );
}
