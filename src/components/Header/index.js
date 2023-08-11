import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/header.module.css";
import Button from "@/components/Buttons";
import { headerItems } from "@/utils/components/header";

const Header = () => {
  const handleClick = () => {
    console.log("sign up...");
  };
  return (
    <section className={styles.section_header}>
      <div className={styles.image_header}>
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={142}
          height={32}
          priority
        />
      </div>
      <div className={styles.navigation_header}>
        {headerItems.map((item, index) => (
          <p key={index} className={item.className}>
            {item.label}
            {item.icon && (
              <Image
                src={item.icon}
                alt={item.iconAlt}
                width={item.iconWidth}
                height={item.iconHeight}
                priority
              />
            )}
          </p>
        ))}
      </div>
      <div className={styles.buttons_header}>
        <Button
          text="Login"
          onClick={handleClick}
          typeCss={"button_login"}
        />
        <Button
          text="Sign up"
          onClick={handleClick}
          typeCss={"button_sign_up"}
        />
      </div>
    </section>
  );
};

export { Header };
