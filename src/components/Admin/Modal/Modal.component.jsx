import React from "react";

import axios from 'axios';

import styles from './Modal.module.css';

function Input({name, value, setValue, ...props}) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input id={name} {...props} value={value} onChange={(event) => setValue(event.target.value)}/>
    </>
  );
}

export default function Modal({refresh, setRefresh, viewModal, setViewModal, dataStock, setDataStock}) {

  const [name, setName] = React.useState('');
  const [quantity, setQuantity] = React.useState(0);
  const [buyDate, setBuyDate] = React.useState('');
  const [lastDate, setLastDate] = React.useState('');
  const [lastQuantityBuy, setLastQuantityBuy] = React.useState(0);
  const [category, setCategory] = React.useState('DEFAULT');
  const [categories, setCategories] = React.useState([]);

  function convertDate(date) {
    let dateFormatter = date.split('T')[0];
    return dateFormatter;
  }

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setViewModal(null);
      setDataStock(null);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (dataStock) {
      handleUpdateStock();
    } else {
      handleAddStock();
    }
  }

  async function handleUpdateStock() {
    const data = {
      name,
      qty: quantity,
      dt_buy: buyDate,
      dt_last_buy: lastDate,
      last_buy_qty: lastQuantityBuy,
      category_stock_id: dataStock.category_stock.id,
    }

    try {
      await axios.patch('http://localhost:4040/stock/' + dataStock.id_stock, data);

      setName('');
      setQuantity(0);
      setLastDate('');
      setBuyDate('');
      setLastQuantityBuy(0);
      setCategory('DEFAULT');
      setViewModal(false);
      setRefresh((refresh) => !refresh);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddStock() {
    const data = {
      name,
      qty: quantity,
      dt_buy: buyDate,
      dt_last_buy: lastDate,
      last_buy_qty: lastQuantityBuy,
      category_stock_id: category,
    }

    try {
      await axios.post('http://localhost:4040/stock', data);

      setName('');
      setQuantity(0);
      setLastDate('');
      setBuyDate('');
      setLastQuantityBuy(0);
      setCategory('DEFAULT');

      setViewModal(false);
      setRefresh((refresh) => !refresh);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSelect(event) {
    setCategory(event.target.value);
  }

  React.useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:4040/stock-category');
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [refresh]);

  React.useEffect(() => {
    if (dataStock) {
      setName(dataStock.name);
      setQuantity(dataStock.qty);
      setLastDate(convertDate(dataStock.dt_last_buy));
      setBuyDate(convertDate(dataStock.dt_buy));
      setLastQuantityBuy(dataStock.last_buy_qty);
      setCategory(dataStock.category_stock.name);
    }
  }, [dataStock]);

  React.useEffect(() => {
    if (!viewModal) {
      setName('');
      setQuantity(0);
      setLastDate('');
      setBuyDate('');
      setLastQuantityBuy(0);
      setCategory('DEFAULT');
    }
  }, [viewModal]);

  if (!viewModal) return (<></>);

  return (
    <div className={styles.wrapper} onClick={handleOutsideClick}>
      <div className={styles.content}>
        <h2>Item do estoque</h2>
        <form onSubmit={handleSubmit}>
          <Input name="Nome" value={name} setValue={setName} type="text"/>
          <Input name="Quantidade" value={quantity} setValue={setQuantity} type="number"/>
          <select onChange={handleSelect} defaultValue="DEFAULT" className={styles.select}>
            <option value={category} disabled hidden>Categoria</option>
            {
              categories.map(({id, name}) => {
                return <option key={id} value={id}>{name}</option>
              })
            }
          </select>
          <Input name="Data de compra" value={buyDate} setValue={setBuyDate} type="date"/>
          <Input name="Última data de compra" value={lastDate} setValue={setLastDate} type="date"/>
          <Input name="Quantidade última compra" value={lastQuantityBuy} setValue={setLastQuantityBuy} type="number"/>
          <button className={styles.button} type="submit">
            { dataStock ? 'Editar' : 'Adicionar' }
          </button>
        </form>
      </div>
    </div>
  );
}