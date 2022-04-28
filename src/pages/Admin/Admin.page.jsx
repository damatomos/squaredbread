import React from 'react';

import styles from './Admin.module.css';

// Components

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
    </section>
  );
}

export default Admin;