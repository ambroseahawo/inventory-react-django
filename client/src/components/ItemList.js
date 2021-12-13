import React from 'react'
import Item from './Item'
import APIService from '../utils/APIService'

const ItemList = ({items, handleEdit, updateDelete}) => {

    const deleteItem = (item) =>{
        APIService.DeleteItem(item.id).then(() => updateDelete(item))
    }

    return (
        <div className='grocery-list'>
            {items.map((item) => {
                const { id, name, quantity } = item
                return(<Item key={id} item={item} name={name} quantity={quantity}
                                handleEdit={handleEdit} deleteItem={deleteItem}/>)
            })}
        </div>
    )
}

export default ItemList
