import styles from "@/styles/components/filters.module.css";
import Button from "@/components/Buttons";
import { TextInput } from "@/components/Inputs";

const Filters = () => {
  const handleClick = () => {};
  return (
    <section className={styles.filter}>
      <div className={styles.section_filter}>
        <Button
          text="Filters"
          onClick={() => handleClick("filter")}
          typeCss={"button_white_border"}
          icon={"icon_filter.svg"}
        />
      </div>
      <div className={styles.add_filter}>
        <Button
          text="País: México"
          onClick={() => handleClick("filter")}
          typeCss={"button_blue_light"}
          icon={"icon_x.svg"}
          iconPosition="end"
        />

        <Button
          text="Estado: CDMX"
          onClick={() => handleClick("filter")}
          typeCss={"button_blue_light"}
          icon={"icon_x.svg"}
          iconPosition="end"
        />
      </div>
      <div className={styles.search_new_filter}>
        <TextInput
          typeInput="text"
          placeHolder="Search"
          icon={"icon_search.svg"}
        />
        <Button
          text="Nuevo Usuario"
          onClick={() => handleClick("")}
          typeCss={"button_blue"}
          icon={"icon_plus.svg"}
          iconPosition="start"
          buttonWidth="250px"
        />
      </div>
    </section>
  );
};

export { Filters };
