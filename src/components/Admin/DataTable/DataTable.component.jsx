import React from "react";

import styles from './DataTable.module.css';
import RowData from "./RowData/RowData.component";


export default function DataTable({setViewModal, stockItems, setRefresh}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Produtos do Estoque
      </div>
      <div className={styles.contentData}>
        <button type="button" className={styles.button} onClick={() => setViewModal(true)}>Adicionar</button>
        <div className={styles.contentTable}>
          <div className={styles.tableHeader}>
            <table className={styles.table}>
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    <th width="40" style={{backgroundColor: 'transparent'}}></th>
                    <th width="40" style={{backgroundColor: 'transparent'}}></th>
                  </tr>
                </thead>
            </table>
          </div>
          <div className={styles.tableBody}>
            <table className={styles.table}>
              <tbody>
                {
                  stockItems.map((data) => 
                  <RowData
                    key={data.id_stock}
                    id={data.id_stock}
                    name={data.name}
                    quantity={data.qty}
                    category={data.category_stock}
                    date={data.dt_last_buy}
                    setRefresh={setRefresh}
                  />)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}