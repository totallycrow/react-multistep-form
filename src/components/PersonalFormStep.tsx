import React from "react";
import FormPageButton from "./FormPageButton";

export default function PersonalFormStep({
  register,
  errors,
  page,
  handleNextPage,
  trigger,
}: any) {
  return (
    <div>
      <input
        defaultValue="Enter Your Name..."
        {...register("personal", {
          pattern: /^[A-Za-z]+$/i,
          required: true,
          maxLength: 20,
        })}
      />
      {errors.personal && <span>This field is required</span>}
      <FormPageButton
        currentPage={page}
        nextPage={handleNextPage}
        fieldCheck={["personal"]}
        trigger={trigger}
      />
    </div>
  );
}
