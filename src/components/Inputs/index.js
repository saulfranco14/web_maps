import styles from '@/styles/components/inputs.module.css'

const TextInput = ({ typeInput, placeHolder }) => {
    return ( 
        <input
            type={typeInput}
            placeholder={placeHolder}
            className={typeInput === 'checkbox' ? styles.input_radio : styles.input}
            autoComplete="new-password"
        />
     );
}
 
export { TextInput };