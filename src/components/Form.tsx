import React, { FormEventHandler, useContext } from "react";
import PersonalFormStep from "./steps/PersonalFormStep";
import EmailFormStep from "./steps/EmailFormStep";
import AddressFormStep from "./steps/AddressFormStep";
import ConfirmSubmitFormStep from "./steps/ConfirmSubmitFormStep";
import { MultiStepContext } from "./MultistepForm";
import { getValue } from "@testing-library/user-event/dist/utils";

export interface IProps {
  page: number;
  register: Function;
  handleSubmit: Function;
  watch: Function;
  errors: object;
  handleNextPage: Function;
  handlePrevPage: Function;
  getValues: Function;
  onSubmit: FormEventHandler<HTMLButtonElement>;
  trigger: Function;
  maxPages: number;
}

export interface IFormProps {
  formProps: IProps;
}

export interface IFormComponentProps {
  register: Function;
  errors: object;
  getValues: Function;
}

export interface INavigationProps {
  page: number;
  handleNextPage: Function;
  handlePrevPage: Function;
  trigger: Function;
  maxPages: Function;
}

interface IStepsProps {
  formComponentProps: IFormComponentProps;
  navigationProps: INavigationProps;
}

export default function Form({ formProps }: IFormProps) {
  const currentPage = formProps.page;

  const formProperties = useContext(MultiStepContext);

  console.log(formProperties);

  const formComponentProps = {
    register: formProperties.register,
    errors: formProperties.errors,
    getValues: formProperties.getValues,
  };

  const navigationProps = {
    page: formProperties.page,
    handleNextPage: formProperties.handleNextPage,
    handlePrevPage: formProperties.handlePrevPage,
    trigger: formProperties.trigger,
    maxPages: formProperties.maxPages,
  };

  switch (currentPage) {
    case 0:
      return (
        <PersonalFormStep
          formComponentProps={formComponentProps}
          navigationProps={navigationProps}
        />
      );

    case 1:
      return (
        <EmailFormStep
          formComponentProps={formComponentProps}
          navigationProps={navigationProps}
        />
      );

    case 2:
      return (
        <AddressFormStep
          formComponentProps={formComponentProps}
          navigationProps={navigationProps}
        />
      );

    case 3:
      return (
        <ConfirmSubmitFormStep
          formComponentProps={formComponentProps}
          navigationProps={navigationProps}
        />
      );

    default:
      return <div>Error loading form...</div>;
  }
}
