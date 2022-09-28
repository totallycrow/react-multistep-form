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
  if (page > 0 && page < maxPages - 1)
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
  else if (page === 0)
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
  else
    return (
      <div>
        {" "}
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
