import React from 'react';

import styles from './Admin.module.css';

// Components
import CardInfo from './../../components/Statistics/CardInfo/CardInfo.component';

// Images
import IncomeIcon from "./../../assets/icon_income.svg";
import ExpenseIcon from "./../../assets/icon_expense.svg";
import MoneyIcon from "./../../assets/icon_money.svg";

function Admin() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Squared Bread</h1>
      </header>
      <section className={styles.cards}>
        <CardInfo title="Entradas" content="R$ 20,00" image={IncomeIcon}/>
        <CardInfo title="Saídas" content="R$ 20,00" image={ExpenseIcon}/>
        <CardInfo title="Total" content="R$ 20,00" image={MoneyIcon}/>
      </section>
    </section>
  );
}

export default Admin;