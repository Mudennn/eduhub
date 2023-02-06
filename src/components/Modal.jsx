import React from 'react'
import {RiCloseFill} from 'react-icons/ri'

const Modal = ({visible, onClose}) => {
    if (!visible) return null

    const handleOnClose = () => {
        onClose()
    }

  return (
    <div onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-2 rounded'>
            <button onClick={onClose}><RiCloseFill /></button>
        </div>
        </div>
  )
}

export default Modal