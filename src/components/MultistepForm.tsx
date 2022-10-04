import { useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useMultistepController from "../hooks/useMultistepController";
import { IProps } from "./Form";
import { createContext, useContext } from "react";

import Form from "./Form";

// redux + redux-toolkit
// recoil
// XState
// react-query
// useSwr
// jotai, zustand

export const MultiStepContext = createContext({} as IProps);
const MAX_FORM_STEPS = 4;
export default function MultistepForm() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
    trigger,
  } = useForm();

  const [page, handleNextPage, handlePrevPage, onSubmit] =
    useMultistepController(MAX_FORM_STEPS, reset, trigger);

  // PROPS
  const formProps: IProps = {
    page: page,
    register: register,
    handleSubmit: handleSubmit,
    watch: watch,
    errors: errors,
    handleNextPage: handleNextPage,
    handlePrevPage: handlePrevPage,
    getValues: getValues,
    onSubmit: onSubmit,
    trigger: trigger,
    maxPages: MAX_FORM_STEPS,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MultiStepContext.Provider value={formProps}>
        <Form formProps={formProps} />
      </MultiStepContext.Provider>
    </form>
  );
}
