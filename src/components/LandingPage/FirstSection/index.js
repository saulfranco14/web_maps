import Image from "next/image";
import { StarRating } from "@/components/Icons/Star";
import { H1 } from "@/components/Text/H1";
import styles from "@/styles/components/landingPage.module.css";
import Button from "@/components/Buttons";

const FirsSection = () => {
  
  const handleClick = () => {
    console.log("sign up...");
  };

  return (
    <section className={styles.landing_page}>
      <div className={styles.section_text_landing_page}>
        <H1 text={"Zero Hassle Push to Talk conversations"} />
        <p className={styles.text_landing_page}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.button_landing_page}>
          <Button
            text="Demo"
            onClick={handleClick}
            typeCss={"button_play"}
            icon={"play-circle.svg"}
          />
          <Button
            text="Get Started"
            onClick={handleClick}
            typeCss={"button_blue"}
          />
        </div>
        <div className={styles.avatar_landing_page}>
          <div className={styles.image_avatar}>
            <Image
              src="/images/avatar_group.svg"
              alt="Avatar"
              width={140}
              height={40}
              priority
            />
          </div>

          <div>
            <div className={styles.image_start}>
              <StarRating count={5} />
              <p className={styles.rating_landing_page}>5.0</p>
            </div>
            <p className={styles.text_rating_landing_page}>from 200+ reviews</p>
          </div>
        </div>
      </div>
      <div className={styles.image_first_section}>
            <Image
              src="/images/content.svg"
              alt="Avatar"
              width={560}
              height={640}
              priority
            />
      </div>
    </section>
  );
};

export { FirsSection };
