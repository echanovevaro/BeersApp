import React from 'react'
import './BeerDetail.css'
export default function BeerDetail({ detailedBeer, onNavigate }) {
	const {
		attenuation_level,
		tagline,
		image_url,
		food_pairing,
		description,
		name,
		brewers_tips,
		contributed_by,
		nationality,
	} = detailedBeer

	return (
		<div className='container__det'>
			<div className='detail'>
				<div className='detail__header'>
					<img src={image_url} className='detail__image' />
					<div className='detail__info'>
						<span className='detail__level'>{attenuation_level}</span>
						<span className='detail__title'>{name}</span>
						<span className='detail__tagline'>"{tagline}"</span>
					</div>
				</div>
				<div className='detail__content'>
					<div className=' detail__describe detail__describe--active'>
						<h2>{name}</h2>
						<h4>Description:</h4> {description}
						<h4>Food pairing:</h4> {food_pairing}
						<h4>Brewers Tips:</h4> {brewers_tips}
						<h4>Contributed by:</h4> {contributed_by}
						<h4>Nationality:</h4> {nationality}
					</div>

					<a href='#' className=' detail__link--next'>
						{' '}
						<span
							className='material-symbols-outlined'
							onClick={() => onNavigate('Home')}>
							arrow_left_alt
						</span>
					</a>
				</div>
			</div>
		</div>
	)
}
