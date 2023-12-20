import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.css';



export const Home = () => {
    const [data, setData] = useState([]);
    const [loanding, setLoanding] = useState(false);

    const fetchApi = () => {
        setLoanding(true);

        api.get('/sites/MLB/search', {
            params: {
                q: 'videogame',
            }
        }).then(response => {
            const data = response.data.results;
            setData(data);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoanding(false);
        })
    }

    useEffect(() => {
        fetchApi();
    }, []);

    if (loanding) {
        return <h1>Carregando...</h1>
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Nossos Produtos</h2>
                <input
                    type="text"
                    placeholder="Pesquisar mais produtos..."
                />

                <div className={styles.cards}>
                    {data.map((item: any) => (
                        <div className={styles.contentCards} key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <h4 className={styles.titleCard}>{item.title}</h4>
                            <span className={styles.originalPrice}>de R$: {item.original_price}</span>
                            <p className={styles.price}>por R$: {item.price}</p>
                            <p className={styles.description}>em até 10x vezes sem juros</p>
                            <button>Comprar</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}