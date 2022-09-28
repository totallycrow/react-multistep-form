import React from "react";
import FormPageButton from "../FormPageButton";
import Navigation from "../Navigation";

export default function PersonalFormStep({
  register,
  errors,
  page,
  handleNextPage,
  handlePrevPage,
  trigger,
  maxPages,
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
      <Navigation
        page={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        trigger={trigger}
        maxPages={maxPages}
      />
    </div>
  );
}
