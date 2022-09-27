import React from "react";
import FormPageButton from "./FormPageButton";

export default function EmailFormStep({
  register,
  errors,
  page,
  handleNextPage,
  handlePrevPage,
  getValues,
}: any) {
  console.log(getValues());
  return (
    <div>
      <input
        defaultValue="Enter Your Email"
        {...register("email", {
          pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
          required: true,
          maxLength: 20,
        })}
      />
      {errors.email && <span>This field is required</span>}
      <FormPageButton currentPage={page} nextPage={handleNextPage} />
      <FormPageButton
        currentPage={page}
        nextPage={handlePrevPage}
        direction="back"
      />
    </div>
  );
}
