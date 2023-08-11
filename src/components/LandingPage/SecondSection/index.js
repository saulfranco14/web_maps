import styles from "@/styles/components/landingPage.module.css";
import { cardData } from "@/utils/components/landingPage";

const SecondSection = () => {
  return (
    <section className={styles.second_section_landing_page}>
      <p className={styles.title_second_section}>
        Great products, faster than ever
      </p>
      <p className={styles.subtitle_second_section}>
        Everything you need to build corporate and great products.
      </p>
      <div className={styles.cards_second_section}>
        {cardData.map((card, index) => (
          <div className={styles.card_section} key={index}>
            <strong className={styles.number_text_second_section}>
              {card.number}
            </strong>
            <p className={styles.text_card_second_section}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { SecondSection };
