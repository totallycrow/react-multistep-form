import React from "react";
import FormPageButton from "../FormPageButton";
import { IFormProps, IProps } from "../Form";
import Navigation from "../Navigation";

export default function AddressFormStep({
  formComponentProps,
  navigationProps,
}: any) {
  const register = formComponentProps.register;
  const errors = formComponentProps.errors;
  return (
    <div>
      <input
        defaultValue="Enter Your Address"
        {...register("address", {
          required: true,
          maxLength: 50,
        })}
      />

      {/* ??? REACT-HOOK-FORM ERRORS? DYNAMICALLY ASSIGNED PROPERTIES? */}
      {/* @ts-ignore */}
      {errors.address && <span>This field is required</span>}
      <div></div>

      <Navigation {...navigationProps} />
    </div>
  );
}
