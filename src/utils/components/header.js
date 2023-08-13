import styles from "@/styles/components/header.module.css";

export const headerItems = [
    {
      label: "Home",
      className: `${styles.list_header} ${styles.margin_left_40}`,
    },
    {
      label: "Products",
      className: styles.list_header,
      icon: "/images/chevron-down.svg",
      iconAlt: "Logo",
      iconWidth: 20,
      iconHeight: 20,
    },
    {
      label: "Resources",
      className: styles.list_header,
      icon: "/images/chevron-down.svg",
      iconAlt: "Logo",
      iconWidth: 20,
      iconHeight: 20,
    },
    {
      label: "Pricing",
      className: styles.list_header,
    },
  ];

export const headerItemsDashboard = [
    {
      label: "Home",
      className: `${styles.list_header} ${styles.margin_left_40}`,
    },
    {
      label: "Dashboard",
      className: `${styles.list_header}`,
    },
    {
      label: "Projects",
      className: styles.list_header,
    },
    {
      label: "Tasks",
      className: styles.list_header,
    },
    {
      label: "Reporting",
      className: styles.list_header,
    },
    {
      label: "Users",
      className: styles.list_header,
    },
  ];