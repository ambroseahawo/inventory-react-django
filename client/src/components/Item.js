import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Item = ({id, name, quantity, editItem, removeItem}) => {
    return (
        <article className='grocery-item'>
            <p className='title'>{name}</p>
            <p className='title sec-col'>{quantity}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn'onClick={() => editItem(id)}><FaEdit/></button>
              <button type='button' className='delete-btn'onClick={() => removeItem(id)}><FaTrash/></button>
            </div>
        </article>
    )
}

export default Item
