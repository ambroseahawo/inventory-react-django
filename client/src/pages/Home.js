import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import ItemList from '../components/ItemList'

const Home = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            showAlert(true, 'danger', 'please enter value');
        } else if (name && isEditing) {
            // update the item here
            setList(
                list.map((item) => {
                if (item.id === editID) {
                    return { ...item, title: name };
                }
                return item;
                })
            );

            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'success', 'value changed');
        } else {
            // create item here
            const newItem = { id: new Date().getTime().toString(), title: name };
            
            setList([...list, newItem]);
            setName('');
            setIsEditing(false);
            showAlert(true, 'success', 'item added to the list');
        }
    };

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    };

    const clearList = () => {
        showAlert(true, 'danger', 'empty list');
        setList([]);
    };

    const removeItem = (id) => {
        showAlert(true, 'danger', 'item removed');
        setList(list.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    };


    return (
        <section className="section-center">
            <Form handleSubmit={handleSubmit} alert={alert} name={name} list={list} 
                    showAlert={showAlert} setName={setName} isEditing={isEditing} />
            {list.length > 0 && (
                <div className="grocery-container">
                    <ItemList items={list} removeItem={removeItem} editItem={editItem}/>
                    <button className="clear-btn" onClick={clearList}>clear items</button>
                </div>
            )}
        </section>
    )
}

export default Home
