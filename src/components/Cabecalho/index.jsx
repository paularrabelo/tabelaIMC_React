import styles from './Cabecalho.module.css';

const Cabecalho = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src="https://cdn.pixabay.com/photo/2013/07/12/14/55/scale-149033_1280.png" alt="Imagem de uma balança" />
            <h1 className={styles.name}>Calcule seu IMC</h1>
        </header>
    )
}

export default Cabecalho