import React from "react";
import FormPageButton from "../FormPageButton";
import Navigation from "../Navigation";

export default function ConfirmSubmitFormStep({
  formComponentProps,
  navigationProps,
}: any) {
  console.log(formComponentProps);
  const formData = formComponentProps.getValues();
  console.log(formData);

  return (
    <div>
      <div>
        <div>Personal: {formData.personal}</div>
        <div>email: {formData.email}</div>
      </div>
      <Navigation {...navigationProps} />
    </div>
  );
}
