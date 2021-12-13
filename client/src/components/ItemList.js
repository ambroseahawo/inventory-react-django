import React from 'react'
import Item from './Item'

const ItemList = ({items, editItem, removeItem}) => {
    return (
        <div className='grocery-list'>
            {items.map((item) => {
                const { id, name, quantity } = item
                return(<Item key={id} id={id} name={name} quantity={quantity}
                                editItem={editItem} removeItem={removeItem}/>)
            })}
        </div>
    )
}

export default ItemList
