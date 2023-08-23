import React, { useState, useId } from 'react'

import './CreateNewBeer.css'

export default function CreateNewBeer({
	addNewBeer,
	onNavigate,
	detailedBeer,
	updateBeer,
}) {
	const initialState = detailedBeer
		? {
				name: detailedBeer.name,
				attenuation_level: detailedBeer.attenuation_level,
				tagline: detailedBeer.tagline,
				image_url: detailedBeer.image_url,
				food_pairing: detailedBeer.food_pairing,
				description: detailedBeer.description,
				graduation: true,
				brewers_tips: detailedBeer.brewers_tips,
				contributed_by: detailedBeer.contributed_by,
				approved: '',
				nationality: '',
				id: detailedBeer.id,
		  }
		: {
				name: '',
				attenuation_level: 0,
				tagline: '',
				image_url: '',
				food_pairing: '',
				description: '',
				graduation: true,
				brewers_tips: '',
				contributed_by: '',
				approved: '',
				nationality: '',
				id: useId(),
		  }

	const [formBeer, setFormBeer] = useState(initialState)
	const [errors, setErrors] = useState({})
	function handleChange(event) {
		console.log('entra')
		const { name, value, type, checked } = event.target
		setFormBeer((prevFormBeer) => {
			return {
				...prevFormBeer,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
		const validationErrors = validations(name, value)
		setErrors({ ...validationErrors })
	}

	function validations(name, value) {
		console.log('name', name)
		console.log(value, value)
		const validationErrors = {}

		if (name == 'name' && value.trim().length < 3) {
			validationErrors.name = 'El nombre debe tener al menos 3 caracteres.'
		}
		if (name === 'attenuation_level' && Number(value) <= 0) {
			validationErrors.attenuation_level =
				'El nivel de atenuación debe ser un número mayor o igual a 0.'
		}
		if (name === 'tagline' && value.trim().length < 5) {
			validationErrors.tagline = 'La etiqueta debe tener al menos 5 caracteres.'
		}
		if (name === 'image_url' && !isValidUrl(value)) {
			validationErrors.image_url = 'La URL de la imagen no es válida.'
		}
		if (name === 'food_pairing' && value.trim().length === 0) {
			validationErrors.food_pairing = 'La lista de maridajes no debe estar vacía.'
		}
		if (name === 'description' && value.trim().length < 3) {
			validationErrors.description =
				'La descripción debe tener al menos 3 caracteres.'
		}
		if (name === 'brewers_tips' && value.trim().length < 3) {
			validationErrors.brewers_tips =
				'Los consejos del cervecero deben tener al menos 3 caracteres.'
		}
		if (name === 'nationality' && value === '') {
			validationErrors.nationality = 'debes elegir una nacionalidad'
		}
		if (name === 'approved' && value === '') {
			validationErrors.approved = 'debes elegir una opción'
		}

		console.log('errors', errors)
		console.log('validation', validationErrors)
		return validationErrors
	}
	function isValidUrl(url) {
		try {
			new URL(url)
			return true
		} catch (error) {
			return false
		}
	}

	function handleSubmit(event) {
		event.preventDefault()
		let validationErrors = {}

		Object.entries(formBeer).forEach(
			(e) =>
				(validationErrors = { ...validationErrors, ...validations(e[0], e[1]) }),
		)
		console.log('validationErrors', validationErrors)
		if (Object.keys(validationErrors).length === 0) {
			if (detailedBeer) {
				updateBeer(formBeer)
			} else {
				addNewBeer(formBeer)
			}
			onNavigate('Home')
		}

		setErrors({ ...validationErrors })
	}

	return (
		<div className='container__create'>
			<div className='create'>
				<form onSubmit={handleSubmit}>
					<div className='form__content'>
						<input
							type='text'
							placeholder='Beer name'
							onChange={handleChange}
							name='name'
							value={formBeer.name}
						/>
						{errors.name && <span className='error-message'>{errors.name}</span>}

						<input
							type='number'
							placeholder='Beer attenuation level'
							onChange={handleChange}
							name='attenuation_level'
							value={formBeer.attenuation_level}
						/>
						{errors.attenuation_level && (
							<span className='error-message'>{errors.attenuation_level}</span>
						)}
						<input
							type='text'
							placeholder='Beer tagline'
							onChange={handleChange}
							name='tagline'
							value={formBeer.tagline}
						/>
						{errors.tagline && (
							<span className='error-message'>{errors.tagline}</span>
						)}
						<input
							type='text'
							placeholder='Beer image'
							className='custom-file-input'
							onChange={handleChange}
							name='image_url'
							value={formBeer.image_url}
						/>
						{errors.image_url && (
							<span className='error-message'>{errors.image_url}</span>
						)}
						<input
							type='text'
							placeholder='Beer pairing'
							onChange={handleChange}
							name='food_pairing'
							value={formBeer.food_pairing}
						/>
						{errors.food_pairing && (
							<span className='error-message'>{errors.food_pairing}</span>
						)}
						<input
							type='text'
							placeholder='Contributed by'
							onChange={handleChange}
							name='contributed_by'
							value={formBeer.contributed_by}
						/>
						{errors.contributed_by && (
							<span className='error-message'>{errors.contributed_by}</span>
						)}
						<textarea
							value={formBeer.description}
							placeholder='Beer description'
							onChange={handleChange}
							name='description'
						/>
						{errors.description && (
							<span className='error-message'>{errors.description}</span>
						)}
						<textarea
							value={formBeer.brewers_tips}
							placeholder='Beer brewerstips'
							onChange={handleChange}
							name='brewers_tips'
						/>
						{errors.description && (
							<span className='error-message'>{errors.description}</span>
						)}

						<select
							onChange={handleChange}
							value={formBeer.nationality}
							name='nationality'>
							<option value=''>select-nationality</option>
							<option value='French'>French</option>
							<option value='American'>American</option>
							<option value='Spanish'>Spanish</option>
							<option value='German'>German</option>
						</select>
						{errors.nationality && (
							<span className='error-message'>{errors.nationality}</span>
						)}
						<div className='input__checkbox'>
							<input
								type='checkbox'
								id='graduation'
								checked={formBeer.graduation}
								onChange={handleChange}
								name='graduation'
							/>
							<label htmlFor='graduation'>it is of high graduation?</label>
						</div>
						{errors.graduation && (
							<span className='error-message'>{errors.graduation}</span>
						)}
						<fieldset>
							<legend>Approved by the authorities?</legend>
							<div className='fieldset__option'>
								<input
									type='radio'
									id='inProgress'
									name='approved'
									value='inProgress'
									checked={formBeer.approved === 'inProgress'}
									onChange={handleChange}
								/>
								<label htmlFor='inProgress'>approved</label>
							</div>
							<div className='fieldset__option'>
								<input
									type='radio'
									id='approved'
									name='approved'
									value='approved'
									checked={formBeer.approved === 'approved'}
									onChange={handleChange}
								/>
								<label htmlFor='inProgress'>not approved</label>
							</div>
							<div className='fieldset__option'>
								<input
									type='radio'
									id='invalidated'
									name='approved'
									value='invalidated'
									checked={formBeer.approved === 'invalidated'}
									onChange={handleChange}
								/>
								<label htmlFor='inProgress'>in progress</label>
							</div>

							{errors.approved && (
								<span className='error-message'>{errors.approved}</span>
							)}
						</fieldset>
					</div>
					<button className='btn__submit' disabled={Object.keys(errors).length > 0}>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}
