import { Header } from "@/components/Header";
import styles from '@/styles/pages/dashboard.module.css'
import { Filters } from '@/components/Filters';
import { Table } from "@/components/Table";

const Dashboard = () => {
  return (
    <>
      <Header typeHeader={"dashboard"} />
      <section className={styles.dashboard}>
        <div className={styles.section_filter}>
          <Filters />
        </div>
        <div className={styles.section_table}>
          <Table />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
