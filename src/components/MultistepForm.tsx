import { useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

  const MAX_FORM_STEPS = 4;

  //   PAGE HANDLERS
  const handleNextPage = useCallback(
    async (pageNumber: number, inputNames?: Array<String>) => {
      if (pageNumber === MAX_FORM_STEPS - 1) return;

      // @ts-ignore
      const fieldStatus = await trigger(inputNames);

      if (fieldStatus) setPage((prev) => prev + 1);
    },
    [trigger]
  );

  const handlePrevPage = useCallback((pageNumber: number) => {
    if (pageNumber === 0) return;
    console.log("test from back button");
    setPage((prev) => prev - 1);
  }, []);
  const resetPage = useCallback(() => setPage(0), []);

  const onSubmit: SubmitHandler<Inputs> = useCallback(() => {
    alert("Success");
    resetPage();
    reset();
  }, []);

  //   ABOVE: Instead of many useCallbacks -> useEffect with no dependencies?

  // PROPS
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
    maxPages: MAX_FORM_STEPS,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form formProps={formProps} />
    </form>
  );
}
