import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { IProps } from "../components/Form";

export default function useMultistepController(
  steps: number,
  reset: Function,
  trigger: Function
): [number, Function, Function, SubmitHandler<FieldValues>] {
  // useMultistepControler
  const [page, setPage] = useState(0);
  const MAX_FORM_STEPS = steps;

  //   PAGE HANDLERS
  const handleNextPage = useCallback(
    async (pageNumber: number, inputNames?: Array<String>) => {
      if (pageNumber === MAX_FORM_STEPS - 1) return;

      // @ts-ignore
      const fieldStatus = await trigger(inputNames);

      if (fieldStatus) setPage((prev) => prev + 1);
    },
    [MAX_FORM_STEPS]
  );

  const handlePrevPage = useCallback((pageNumber: number) => {
    if (pageNumber === 0) return;
    console.log("test from back button");
    setPage((prev) => prev - 1);
  }, []);
  const resetPage = useCallback(() => setPage(0), []);

  const onSubmit = useCallback(() => {
    alert("Success");
    resetPage();
    reset();
  }, [reset, resetPage]);

  return [page, handleNextPage, handlePrevPage, onSubmit];
}
