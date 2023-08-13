import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderItem } from "@/components/Header/HeaderItem";
import { headerItems, headerItemsDashboard } from "@/utils/components/header";
import styles from "@/styles/components/header.module.css";
import Button from "@/components/Buttons";

const Header = ({ typeHeader }) => {
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url);
  };

  return (
    <div className={styles.header}>
      <section className={styles.section_header}>
        <div className={styles.image_header}>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={142}
              height={32}
              priority
            />{" "}
          </Link>
        </div>
        <div className={styles.navigation_header}>
          {typeHeader === "public"
            ? headerItems.map((item, index) => (
                <HeaderItem key={index} item={item} />
              ))
            : typeHeader === "dashboard"
            ? headerItemsDashboard.map((item, index) => (
                <HeaderItem key={index} item={item} />
              ))
            : null}
        </div>
        {typeHeader === "public" && (
          <div className={styles.buttons_header}>
            <Button
              text="Login"
              onClick={() => handleClick("/login")}
              typeCss={"button_white"}
            />
            <Button
              text="Sign up"
              onClick={() => handleClick("sign-up")}
              typeCss={"button_blue"}
            />
          </div>
        )}
        {typeHeader === "dashboard" && (
          <div className={styles.buttons_dashboard}>
            <div className={styles.icons_filter}>
              <Image
                src="/images/nav_icon.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
              <Image
                src="/images/bell_icon.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </div>
            <Image
              src="/images/avatar_header.svg"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
          </div>
        )}
      </section>
    </div>
  );
};

export { Header };
