import styles from './Tabela.module.css';

const TabelaIMC = () => {
    return (
        <div className={styles.container_tabela}>
            <table className={styles.tabela}>
                <thead className={styles.header}>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody className={styles.body}>
                    <tr id='linha1'>
                        <td>Menor que 17</td>
                        <td>Muito abaixo do peso</td>
                    </tr>
                    <tr id='linha2' className={styles.bgLight}>
                        <td>Entre 17 e 18,49</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr id='linha3'>
                        <td>Entre 18,5 e 24,99</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr id='linha4' className={styles.bgLight}>
                        <td>Entre 25 e 29,99</td>
                        <td>Acima do Peso</td>
                    </tr>
                    <tr id='linha5'>
                        <td>Entre 30 e 34,99</td>
                        <td>Obesidade I</td>
                    </tr>
                    <tr id='linha6' className={styles.bgLight}>
                        <td>Entre 35 e 39,99</td>
                        <td>Obesidade II (severa)</td>
                    </tr>
                    <tr id='linha7'>
                        <td>Acima de 40</td>
                        <td>Obesidade III (Mórbida)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TabelaIMC;