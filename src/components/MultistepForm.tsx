import { useCallback, useState } from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import PersonalFormStep from "./PersonalFormStep";
import EmailFormStep from "./EmailFormStep";
import AddressFormStep from "./AddressFormStep";
import Form from "./Form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function MultistepForm() {
  const [page, setPage] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
    trigger,
  } = useForm<Inputs>();

  console.log(trigger);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // alert("Success");
    console.log(data);
    console.log("ERRORS", errors);
    // resetPage();
    // reset();
  };

  const MAX_FORM_STEPS = 4;

  //   PAGE HANDLERS
  const handleNextPage = useCallback((pageNumber: number) => {
    if (pageNumber === MAX_FORM_STEPS - 1) return;

    setPage((prev) => prev + 1);
  }, []);

  const handlePrevPage = useCallback((pageNumber: number) => {
    if (pageNumber === 0) return;
    setPage((prev) => prev - 1);
  }, []);

  const resetPage = useCallback(() => setPage(0), []);

  //   ABOVE: Instead of many useCallbacks -> useEffect with no dependencies?

  const formProps = {
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form formProps={formProps} />
    </form>
  );
}
