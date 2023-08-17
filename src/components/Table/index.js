import React from "react"
import Image from "next/image"
import { useDispatch } from "react-redux";
import styles from "@/styles/components/table.module.css"
import { useTable, usePagination } from "react-table"
import Button from "@/components/Buttons";
import { SweetAlerConfirm } from '@/utils/components/sweet'
import { deleteUser } from "../../../redux/actions/user";


const Table = ({ users }) => {

  const dispatch = useDispatch();

  const columns = [
    {
      Header: <input type="checkbox" />,
      accessor: "selected",
      style: { width: "5vh" },
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row?.original?.selected}
          onChange={() => handleCheckboxChange(row)}
        />
      ),
    },
    {
      Header: "Cliente",
      accessor: "avatar",
      style: { width: "5vh" },
      Cell: ({ value }) => (
        <Image
          src={`/images/${value}.svg`}
          alt="Avatar"
          width={50}
          height={50}
          onError={(e) => {
            e.target.src = "/images/avatar_header.svg"; 
          }}
        />
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
      data: users,
    },
    usePagination
  );

  const handleDelete = async  (row) => {
    const alertConfirm = await SweetAlerConfirm()

    if (alertConfirm.isConfirmed) {
      dispatch(deleteUser(row?.original?.id));
    } else {
      console.log("Cancel confirm...");
    }
  };

  const handleCheckboxChange = (row) => {
    const updatedRow = {
      ...row.original,
      selected: !row.original.selected || false,
    };
  };

  return (
    <div className={styles.section_table}>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  style={{
                    padding: index === 0 || (index === 1 && "0px"),
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
                        padding: cellIndex === 0 || (cellIndex === 1 && "0px"),
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
