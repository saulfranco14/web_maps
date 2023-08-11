import styles from "@/styles/components/landingPage.module.css";
import { StarRating } from "@/components/Icons/Star";
import { Avatar } from "@/components/Icons/Avatar";
import Image from "next/image";

const ThirdSection = () => {
  return (
    <section className={styles.third_section_landing_page}>
      <div className={styles.third_section_primary}>
        <div className={styles.image_star_third}>
          <StarRating count={5} />
        </div>
        <p className={styles.title_third_section}>
          We&apos;ve really sped up our workflow with Company and haven&apos;t
          looked back.
        </p>
        <div className={styles.section_avatar}>
          <Avatar src="/images/Avatar.svg" alt="User Avatar" />
          <div className={styles.section_text_avatar}>
            <p className={styles.text_avatar}>Katherine Moss</p>
            <p className={styles.subtext_avatar}>Project Manager, Layers</p>
          </div>
          <div className={styles.button_avatar}>
            <Image
              src="/images/third_arrow_left.svg"
              alt="arrow left"
              width={56}
              height={56}
              priority
              style={{ marginRight: "16px" }}
            />
            <Image
              src="/images/third_arrow_rigth.png"
              alt="arrow rigth"
              width={56}
              height={56}
              priority
            />
          </div>
        </div>
        <div className={styles.button_avatar_mobile}>
          <Image
            src="/images/third_arrow_left.svg"
            alt="arrow left"
            width={56}
            height={56}
            priority
            style={{ marginRight: "16px" }}
          />
          <Image
            src="/images/third_arrow_rigth.png"
            alt="arrow rigth"
            width={56}
            height={56}
            priority
          />
        </div>
      </div>
      <div className={styles.third_section_secondary}>
        <Image
          src="/images/third_contents.svg"
          alt="contents mobile"
          width={576}
          height={496}
          priority
        />
      </div>
      <div className={styles.third_section_secondary_mobile}>
        <Image
          src="/images/contents_mobile.svg"
          alt="contents mobile"
          width={576}
          height={496}
          priority
        />
      </div>
    </section>
  );
};

export { ThirdSection };
