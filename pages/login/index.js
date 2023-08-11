import styles from "@/styles/pages/login.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { TextInput } from "@/components/Inputs";
import Button from "@/components/Buttons";

const Login = () => {
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <section className={styles.login}>
      <div className={styles.card_login}>
        <div className={styles.image_login}>
          <Image
            src="/images/logo_login.svg"
            alt="Logo Login"
            width={56}
            height={56}
            priority
          />
        </div>
        <p className={styles.title_login}>Welcome back</p>
        <p className={styles.subtitle_login}>Please enter your details.</p>
        <div className={styles.section_input}>
          <TextInput typeInput="text" placeHolder="Enter your email" />
          <TextInput typeInput="password" placeHolder="••••••••" />
        </div>
        <div className={styles.section_radio}>
          <TextInput typeInput="checkbox" />
          <p className={styles.text_radio}>Remember for 30 days</p>
          <p className={styles.text_forgot_password}>Forgot password</p>
        </div>
        <Button
          text="Sign In"
          onClick={() => handleClick("/login")}
          typeCss={"button_blue"}
        />
        <div className={styles.text_footer_login}>
            <p className={styles.title_footer_login}>Don&apos;t have an account?</p>
            <p className={styles.subtitle_footer_login}>Sign up</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
