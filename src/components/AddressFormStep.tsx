import React from "react";
import FormPageButton from "./FormPageButton";
import { IFormProps, IProps } from "./Form";

export default function AddressFormStep({
  register,
  errors,
  page,
  handleNextPage,
  handlePrevPage,
  trigger,
}: IProps) {
  console.log(register);
  console.log(trigger);
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

      <FormPageButton
        currentPage={page}
        nextPage={handleNextPage}
        fieldCheck={"address"}
        trigger={trigger}
      />
      <FormPageButton
        currentPage={page}
        nextPage={handlePrevPage}
        direction="back"
      />
    </div>
  );
}
