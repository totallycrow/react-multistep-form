import React from "react";
import PersonalFormStep from "./PersonalFormStep";
import EmailFormStep from "./EmailFormStep";
import AddressFormStep from "./AddressFormStep";
import ConfirmSubmitFormStep from "./ConfirmSubmitFormStep";

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
}

export interface IFormProps {
  formProps: IProps;
}

export default function Form({ formProps }: IFormProps) {
  console.log(formProps);
  const currentPage = formProps.page;
  console.log("Form state received", currentPage);

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
