import React, { useContext } from "react";
import FormPageButton from "./FormPageButton";
import { MultiStepContext } from "./MultistepForm";

export default function Navigation() {
  const {
    page,
    handleNextPage,
    trigger,
    handlePrevPage,

    maxPages,
    onSubmit,
  } = useContext(MultiStepContext);

  const isInitialIndex = page === 0;

  console.log(trigger);

  if (isInitialIndex)
    return (
      <div>
        <FormPageButton
          currentPage={page}
          nextPage={handleNextPage}
          trigger={trigger}
        />
      </div>
    );

  const isIndexInBetween = page > 0 && page < maxPages - 1;
  console.log(onSubmit);

  if (isIndexInBetween)
    return (
      <div>
        <FormPageButton
          currentPage={page}
          nextPage={handleNextPage}
          trigger={trigger}
        />
        <FormPageButton
          currentPage={page}
          prevPage={handlePrevPage}
          direction="back"
        />
      </div>
    );

  return (
    <div>
      <FormPageButton
        currentPage={page}
        prevPage={handlePrevPage}
        direction="back"
      />
      <button type="submit" onSubmit={onSubmit}>
        Submit
      </button>
    </div>
  );
}
