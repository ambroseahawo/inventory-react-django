import React from 'react'
import Alert from './Alert'

const Form = ({handleSubmit, alert, list, showAlert, name, setName, isEditing}) => {
    return (
        <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>inventory</h3>
        <div className='form-control'>
          <div className='form-field'>
            <label htmlFor="name">Name: </label>
            <input type='text' className='grocery'
                      placeholder='e.g. eggs'value={name}
                      onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className='form-field'>
            <label htmlFor="quantity">Quantity: </label>
            <input type='text' className='grocery'
                      placeholder='e.g. eggs'value={name}
                      onChange={(e) => setName(e.target.value)}/>
          </div>
          
          <div className='custom-margin'>
            <button type='submit' className='submit-btn'>
              {isEditing ? 'edit' : 'add item'}
            </button>
          </div>
        </div>
      </form>
    )
}

export default Form
