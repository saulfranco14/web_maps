import styles from '@/styles/components/inputs.module.css'

const TextInput = ({ typeInput, placeHolder, name, label }) => {
    return (
        <>
            {label && <label className={styles.label} htmlFor={name}>{label}</label>}
            <input
                type={typeInput}
                placeholder={placeHolder}
                name={name}
                id={name}
                className={typeInput === 'checkbox' ? styles.input_radio : styles.input}
                autoComplete="new-password"
            />
        </>
    );
}

export { TextInput };
