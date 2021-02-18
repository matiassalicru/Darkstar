import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage) +1 ; i++) {
    pageNumbers.push(i);
    console.log(pageNumbers);
  }

  return (
    <nav className="pagination__main">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="pagination__list-item"
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};
