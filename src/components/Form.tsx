import React from "react";
import PersonalFormStep from "./steps/PersonalFormStep";
import EmailFormStep from "./steps/EmailFormStep";
import AddressFormStep from "./steps/AddressFormStep";
import ConfirmSubmitFormStep from "./steps/ConfirmSubmitFormStep";

export interface IProps {
  page: number;
  register: Function;
  handleSubmit: Function;
  watch: Function;
  errors: object;
  handleNextPage: Function;
  handlePrevPage: Function;
  getValues: Function;
  onSubmit: Function;
  trigger: Function;
  maxPages: number;
}

export interface IFormProps {
  formProps: IProps;
}

export default function Form({ formProps }: IFormProps) {
  const currentPage = formProps.page;

  switch (currentPage) {
    case 0:
      return <PersonalFormStep {...formProps} />;

    case 1:
      return <EmailFormStep {...formProps} />;

    case 2:
      return <AddressFormStep {...formProps} />;

    case 3:
      return <ConfirmSubmitFormStep {...formProps} />;

    default:
      return <div>Error loading form...</div>;
  }
}
