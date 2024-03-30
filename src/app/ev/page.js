"use client";
import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { data } from "./data.json";
import styles from "./page.module.css"; // Import the CSS module
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Mobile number",
    accessor: "phone number",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "EV number",
    accessor: "evnumber",
    Cell: ({ row }) => <React.Fragment>{row.original.evnumber}</React.Fragment>,
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: () => (
      <button
        onClick={() => console.log("Button clicked")}
        className={styles.button}
      >
        Book
      </button>
    ),
  },
];

const Page = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex, pageSize }, // Destructure pageSize
    pageCount,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <table {...getTableProps()} className={styles.table}>
          <thead>
            {headerGroups.map((hg) => (
              <tr {...hg.getHeaderGroupProps()}>
                {hg.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={styles.th}
                  >
                    {column.render("Header")}
                    {column.isSorted && (
                      <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()} className={styles.tr}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className={styles.td}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.btnContainer}>
          <button
            disabled={!canPreviousPage}
            onClick={previousPage}
            className={styles.button}
          >
            Prev
          </button>
          <span className={styles.pageInfo}>
            {pageIndex + 1} of {pageCount}
          </span>
          <button
            disabled={!canNextPage}
            onClick={nextPage}
            className={styles.button}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
