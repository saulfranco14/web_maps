import Link from "next/link";
import styles from "@/styles/components/footer.module.css";
import Image from "next/image";
import { footerLinks, socialIcons } from "@/utils/components/footer";

const Footer = () => {
  return (
    <section className={styles.section_footer}>
      <div className={styles.first_section_footer}>
        <div className={styles.information_footer}>
          <div className={styles.image_footer}>
            <Image
              src="/images/logo_white.svg"
              alt="Logo"
              width={142}
              height={32}
              priority
            />
          </div>
          <p className={styles.text_footer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        <div className={styles.second_section_footer_mobile}>
          {footerLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={styles.link_button_footer}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className={styles.buttons_footer}>
          <p className={styles.text_button_footer}>Get the app</p>
          <div className={styles.buttons_app}>
            <div className={styles.apple_button}>
              <Image
                src="/images/apple_button.svg"
                alt="Logo"
                width={135}
                height={40}
                priority
              />
            </div>
            <div className={styles.android_button}>
              <Image
                src="/images/android_button.svg"
                alt="Logo"
                width={135}
                height={40}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.second_section_footer}>
        {footerLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={styles.link_button_footer}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className={styles.third_section_footer}>
        <p className={styles.text_third_footer}>
          © 2022 FlexBip. All rights reserved.
        </p>
        <div className={styles.social_network_footer}>
          {socialIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              priority
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Footer };
