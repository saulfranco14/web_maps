import Image from "next/image";
import Button from "@/components/Buttons";
import styles from "@/styles/components/landingPage.module.css";


const FourSection = () => {
  const handleClick = () => {
    console.log("sign up...");
  };
  return (
    <section className={styles.section_four_landing_page}>
      <div className={styles.image_faq}>
        <Image
          src="/images/avatar_group_faq.svg"
          alt="arrow left"
          width={120}
          height={56}
          priority
        />
      </div>
      <p className={styles.text_four_section}>Still have questions?</p>
      <p className={styles.subtext_four_section}>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      <div>
        <Button
            text="Get in touch"
            onClick={handleClick}
            typeCss={"button_blue"}
        />
      </div>
    </section>
  );
};

export { FourSection };
