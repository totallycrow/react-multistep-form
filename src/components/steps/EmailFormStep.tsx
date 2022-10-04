import React from "react";
import FormPageButton from "../FormPageButton";
import Navigation from "../Navigation";

export default function EmailFormStep({
  formComponentProps,
  navigationProps,
}: any) {
  const register = formComponentProps.register;
  const errors = formComponentProps.errors;

  return (
    <div>
      <input
        defaultValue="Enter Your Email"
        {...register("email", {
          // pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
          required: true,
          maxLength: 20,
        })}
      />
      {errors.email && <span>This field is required</span>}
      <Navigation {...navigationProps} />
    </div>
  );
}
