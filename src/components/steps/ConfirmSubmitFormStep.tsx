import React from "react";
import FormPageButton from "../FormPageButton";
import Navigation from "../Navigation";

export default function ConfirmSubmitFormStep({
  register,
  errors,
  page,
  handleNextPage,
  getValues,
  onSubmit,
  handlePrevPage,
  trigger,
  maxPages,
}: any) {
  const formData = getValues();
  console.log(formData);

  return (
    <div>
      <div>
        <div>Personal: {formData.personal}</div>
        <div>email: {formData.email}</div>
      </div>
      <Navigation
        page={page}
        prevPage={handlePrevPage}
        handlePrevPage={handlePrevPage}
        trigger={trigger}
        maxPages={maxPages}
      />
    </div>
  );
}
