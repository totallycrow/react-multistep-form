import React from "react";
import FormPageButton from "../FormPageButton";
import Navigation from "../Navigation";
import IFormComponentProps from "../Form";
import IStepsProps from "../Form";

export default function PersonalFormStep({
  formComponentProps,
  navigationProps,
}: any) {
  const register = formComponentProps.register;
  const errors = formComponentProps.errors;

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
      <Navigation {...navigationProps} />
    </div>
  );
}
