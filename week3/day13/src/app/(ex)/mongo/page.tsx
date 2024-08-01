"use client";
import { addProduct } from "@/server-action/product.action";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function MongoPage() {
  const [state, formAction] = useFormState(addProduct, {
    message: "",
    status: true,
  }); // 클라이언트에서만 사용 가능
  //addProduct 를  useFormState로 래핑한 것임.

  useEffect(() => {
    if (state.message !== "") {
      alert(state.message);
    }
  }, [state]);

  return (
    <>
      <h1>MongoPage</h1>
      {JSON.stringify(state)}
      <form action={formAction}>
        <input type="text" name="product" />
        <br />
        <input type="number" name="price" />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
