import { format } from "date-fns";

export const revalidate = 0;
export default function BPage() {
  return (
    <>
      <h1>BPage</h1>
      <h2>BPage: {format(new Date(), "HH:mm:ss")}</h2>
    </>
  );
}
