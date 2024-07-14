import { useState } from "react";

interface PaginationProps {
  data: unknown[];
  elementPerPage: number;
}

export const Pagination = ({ data, elementPerPage }: PaginationProps) => {
  const pagesNumber = Math.round(data.length / elementPerPage);
  const [activePage, setActivePage] = useState(0);

  const activeData = data.slice(
    activePage * elementPerPage,
    (activePage + 1) * elementPerPage
  );

  return (
    <>
      {activeData.map((item) => (
        <p>{item.name}</p>
      ))}
      <div className="pagination">
        <button
          disabled={activePage === 0}
          onClick={() => setActivePage(activePage - 1)}
        >
          Previous
        </button>
        {[...Array(pagesNumber).keys()].map((key) => (
          <button
            key={key}
            className={activePage === key ? "active" : ""}
            onClick={() => setActivePage(key)}
          >
            {key + 1}
          </button>
        ))}
        <button
          disabled={activePage === pagesNumber - 1}
          onClick={() => setActivePage(activePage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};
