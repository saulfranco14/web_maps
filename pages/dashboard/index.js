import React, { useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import styles from "@/styles/pages/dashboard.module.css";
import { Filters } from "@/components/Filters";
import { Table } from "@/components/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/user";
import ReactLoading from "react-loading";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.user);

  const getUsers = useCallback(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <Header typeHeader={"dashboard"} />
      <section className={styles.dashboard}>
        <div className={styles.section_filter}>
          <Filters />
        </div>
        <div className={styles.section_table}>
          {loading ? (
            <div className={styles.loading_table}>
              <ReactLoading
                type={"spin"}
                color={"black"}
                height={50}
                width={50}
              />
              <h2 style={{ marginBottom: "10px" }}>Cargando usuarios...</h2>
            </div>
          ) : (
            <Table users={users} />
          )}
        </div>{" "}
      </section>
    </>
  );
};

export default Dashboard;
