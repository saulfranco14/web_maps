import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/landingPage.module.css";
import { accordionData } from "@/utils/components/landingPage";

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className={styles.section_faq}>
      <p className={styles.title_faq}>Frequently asked questions</p>
      <p className={styles.subtitle_faq}>
        Everything you need to know about the product and billing.
      </p>
      <div className={styles.section_accordion}>
        {accordionData.map((item, index) => (
          <div className={styles.accordion} key={index}>
            <strong
              className={styles.title_accordion}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}{" "}
              <Image
                src={`/images/${
                  openIndexes.includes(index)
                    ? "minus-circle.svg"
                    : "plus-circle.svg"
                }`}
                alt="Toggle"
                width={24}
                height={24}
                priority
              />
            </strong>
            {openIndexes.includes(index) && (
              <p className={styles.text_accordion}>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export { Faq };
