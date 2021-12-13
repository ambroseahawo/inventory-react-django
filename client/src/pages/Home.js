import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import Alert from '../components/Alert'
import ItemList from '../components/ItemList'

const Home = () => {
    const [list, setList] = useState([]);
    const [addBtn, setAddBtn] = useState(true)
    const [editItem, setEditItem] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: ''})

    const fetchItems = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/items");
        const items = await response.json();
        console.log(items)
        setList(items)
    }

    useEffect(() => {
        fetchItems();
    }, [])

    const itemForm = (item) =>{
        setAddBtn(false)
        setEditItem(item? item: {name: '', quantity: ''})
    }

    const newItem = (item) =>{
        const newItems = [item, ...list]
        setList(newItems)

        showAlert(true, 'success', 'item added to the list')
    }

    const updatedItem =(prevItem) =>{
        const newItems = list.map(item => {
            if (item.id === prevItem.id){
                return prevItem
            }else{
                return item
            }
        })

        setList(newItems)
        showAlert(true, 'success', 'item changed')
    }

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    };

    const updateDelete = (deletedItem) => {
        const newItems = list.filter(item => {
            if (item.id === deletedItem.id){
                return false
            }
            return true
        })

        setList(newItems)
        showAlert(true, 'danger', 'item removed');
    };

    const handleEdit = (item) => {
        itemForm(item)
    };


    return (
        <section className="section-center">
            {addBtn ? <button className="btn add-item-btn" onClick={itemForm}>add item</button> : null}
            {editItem? <Form newItem={newItem} updatedItem={updatedItem} editItem={editItem} alert={alert} list={list} showAlert={showAlert} setAddBtn={setAddBtn} setEditItem={setEditItem} />: null}
            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
            {list.length > 0 && (
                <div className="grocery-container">
                    <ItemList items={list} updateDelete={updateDelete} handleEdit={handleEdit}/>
                </div>
            )}
        </section>
    )
}

export default Home
