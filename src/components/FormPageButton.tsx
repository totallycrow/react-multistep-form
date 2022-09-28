import React from "react";

export default function FormPageButton({
  currentPage,
  nextPage,
  prevPage,
  direction,
  fieldCheck,
}: any) {
  if (direction === "back")
    return <button onClick={() => prevPage(currentPage)}>Back</button>;
  return <button onClick={() => nextPage(currentPage)}>Next</button>;
}
