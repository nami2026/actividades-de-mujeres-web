import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>Definiciond de responsabilidad social</h2>
      <p className={styles.cardDescription}>
      El origen etimológico de responsabilidad está compuesto por dos palabras:
respuesta y habilidad, podemos inferir que la Responsabilidad Social es la habilidad
para responder a la sociedad.
      </p>
      <button className={styles.cardButton}>Leer más</button>
    </div>
  );
};

export default Card;
