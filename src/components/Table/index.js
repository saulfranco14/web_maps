import React from "react";
import Image from "next/image";
import styles from "@/styles/components/table.module.css";
import { useTable, usePagination } from "react-table";
import { data } from "@/utils/components/table";
import Button from "@/components/Buttons";

const Table = () => {
  const columns = [
    {
      Header: <input type="checkbox" />,
      accessor: "selected",
      style: { width: "5vh" },
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.selected}
          onChange={() => handleCheckboxChange(row)}
        />
      ),
    },
    {
      Header: "Cliente",
      accessor: "avatar",
      style: { width: "5vh" },
      Cell: ({ value }) => (
        <Image src={`/images/${value}`} alt="Avatar" width={50} height={50} />
      ),
    },
    { Header: " ", accessor: "name" },
    { Header: "Género", accessor: "gener" },
    { Header: "País", accessor: "country" },
    { Header: "Estado", accessor: "state" },
    {
      Header: " ",
      Cell: ({ row }) => (
        <button onClick={() => handleDelete(row)}>
          {" "}
          <Image
            src={`/images/icon_trash.svg`}
            alt="Trash"
            width={60}
            height={40}
          />
        </button>
      ),
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const handleDelete = (row) => {
    console.log("Delete", row.original);
  };

  const handleCheckboxChange = (row) => {
    row.original.selected = !row.original.selected;
    prepareRow(row);
  };

  return (
    <div className={styles.section_table}>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  style={{
                    padding: index === 0 || (index === 1 && "0"),
                  }}
                  className={styles.th_table}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr key={rowIndex} {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td
                      key={cellIndex}
                      className={styles.td_table}
                      {...cell.getCellProps()}
                      style={{
                        width:
                          cellIndex === 0 || cellIndex === 1
                            ? "5vh"
                            : undefined,
                        padding: cellIndex === 0 || (cellIndex === 1 && "0"),
                      }}
                    >
                      <p
                        className={`${
                          cell.column.id === "gener"
                            ? cell.value === "Hombre"
                              ? styles.gener_men
                              : styles.gener_girl
                            : ""
                        }`}
                      >
                        {cell.render("Cell")}
                      </p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.pagination_table}>
        <Button
          text="Previous"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          typeCss={"button_white_border"}
        />{" "}
        <p className={styles.pagination_text_table}>Page 1 of 10</p>
        <Button
          text="Next"
          onClick={() => nextPage()}
          disabled={!canNextPage}
          typeCss={"button_white_border"}
        />
      </div>
    </div>
  );
};

export { Table };
