// Pagination.js

import React from "react";
import styles from "./BoardPagnation.module.css";

const BoardPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageItem}>
            <a
              onClick={() => paginate(number)}
              href="#"
              className={styles.pageLink}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BoardPagination;
