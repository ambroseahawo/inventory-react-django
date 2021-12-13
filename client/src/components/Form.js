import React, {useState, useEffect} from 'react'
import APIService from '../utils/APIService'

const Form = ({newItem, setAddBtn, setEditItem, updatedItem, editItem, alert, list, showAlert}) => {
    const [name, setName] = useState(editItem.name)
    const [quantity, setQuantity] = useState(editItem.quantity)

    useEffect(() => {
      setName(editItem.name)
      setQuantity(editItem.quantity)
    }, [editItem])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name | !quantity) {
            showAlert(true, 'danger', 'please enter value')
        } else if (editItem.id) {
              APIService.UpdateItem(editItem.id, {name, quantity})
                        .then(resp => updatedItem(resp))

              setName('')
              setQuantity('')
              setEditItem(false)
              setAddBtn(true)
        } else {
            // create item here
            APIService.InsertItem({name, quantity}).then(
              resp => newItem(resp)
            )
            
            setName('')
            setQuantity('')
        }
    }

    return (
      <div>
        {editItem? (
            <form className='grocery-form' onSubmit={handleSubmit}>
            {/* {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />} */}

            <h3>inventory</h3>
            <div className='form-control'>
              <div className='form-field'>
                <label htmlFor="name">Name: </label>
                <input type='text' id='name' className='grocery' placeholder='e.g. books' value={name}
                          onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className='form-field'>
                <label htmlFor="quantity">Quantity: </label>
                <input type='text' id='quantity' className='grocery' placeholder='e.g. 27'value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}/>
              </div>
              
              <div className='custom-margin'>
                <button type='submit' className='submit-btn'>
                  {editItem.id ? 'edit item' : 'add item'}
                </button>
              </div>
            </div>
          </form>
        ): null}
      </div>
    )
}

export default Form
