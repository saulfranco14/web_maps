import { Header } from "@/components/Header";
import styles from '@/styles/pages/new_user.module.css'
import { TextInput } from "@/components/Inputs";

const NewUser = () => {
    return (  
        <>
            <Header typeHeader={"dashboard"} />
            <section className={styles.new_user}>
                <TextInput
                    name={'name_user'}
                    typeInput="text"
                    placeHolder="Marta Sahagun"
                    label={'Nombre'}
                />

            </section>

        </>
    );
}
 
export default NewUser;