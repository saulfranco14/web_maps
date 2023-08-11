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