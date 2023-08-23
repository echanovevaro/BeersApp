import React from 'react'
import './Error.css' // Asegúrate de tener el archivo CSS para estilos del error
import { useApi } from '../services/hooks/useApi'

const Error = () => {
	const { error: errorMessage } = useApi()
	return (
		<div className='error-container'>
			<p className='error-text'>{errorMessage}</p>
		</div>
	)
}

export default Error
