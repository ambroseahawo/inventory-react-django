import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Item = ({name, quantity, handleEdit, deleteItem, item}) => {
    return (
        <article className='grocery-item'>
            <p className='title'>{name}</p>
            <p className='title sec-col'>{quantity}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn'onClick={() => handleEdit(item)}><FaEdit/></button>
              <button type='button' className='delete-btn'onClick={() => deleteItem(item)}><FaTrash/></button>
            </div>
        </article>
    )
}

export default Item
