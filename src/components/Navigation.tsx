import React from "react";
import FormPageButton from "./FormPageButton";

export default function Navigation({
  page,
  handleNextPage,
  trigger,
  handlePrevPage,
  fieldCheck,
  maxPages,
  onSubmit,
}: any) {
  const isInitialIndex = page === 0;

  if (isInitialIndex)
    return (
      <div>
        <FormPageButton
          currentPage={page}
          nextPage={handleNextPage}
          fieldCheck={fieldCheck}
          trigger={trigger}
        />
      </div>
    );

  const isIndexInBetween = page > 0 && page < maxPages - 1;

  if (isIndexInBetween)
    return (
      <div>
        <FormPageButton
          currentPage={page}
          nextPage={handleNextPage}
          fieldCheck={fieldCheck}
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
