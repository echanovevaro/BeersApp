import React from 'react'
import './ModalDelete.css'

const ModalDelete = ({ beers, detailedBeer, show, onCancel, onConfirm }) => {
	if (!show) {
		return null
	}

	return (
		<div className='modal-container'>
			<div className='modal-content'>
				<p>
					{' '}
					You are about to eliminate the "
					{beers.find((b) => b.id === detailedBeer.id).name}" beer, are you sure?
				</p>
				<div className='modal-buttons'>
					<button className='modal-buttons-cancel' onClick={onCancel}>
						Cancelar
					</button>
					<button className='modal-buttons-delete' onClick={onConfirm}>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	)
}
export default ModalDelete
