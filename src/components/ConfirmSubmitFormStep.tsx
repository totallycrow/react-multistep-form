import React from "react";
import FormPageButton from "./FormPageButton";

export default function ConfirmSubmitFormStep({
  register,
  errors,
  page,
  handleNextPage,
  getValues,
  onSubmit,
  handlePrevPage,
}: any) {
  const formData = getValues();
  console.log(formData);

  return (
    <div>
      <div>
        <div>Personal: {formData.personal}</div>
        <div>email: {formData.email}</div>
      </div>
      <FormPageButton
        currentPage={page}
        nextPage={handlePrevPage}
        direction="back"
      />
      <button type="submit">Submit</button>
    </div>
  );
}
