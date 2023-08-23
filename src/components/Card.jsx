import './Card.css'

export default function Card({
	attenuation_level,
	tagline,
	image_url,
	description,
	name,
	onDetail,
	id,
}) {
	return (
		<>
			<div className='card'>
				<div className='card__header'>
					<img
						src={image_url}
						className='card__image'
						onClick={() => onDetail(id)}
					/>
					<div className='card__info'>
						<span className='card__level'>{attenuation_level}</span>
						<span className='card__title'>{name}</span>
						<span className='card__tagline'>"{tagline}"</span>
					</div>
				</div>
				<div className='card__content'>
					<p className=' card__describe card__describe--active'>{description}</p>

					<a href='#' onClick={() => onDetail(id)} className=' card__link--next'>
						{' '}
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a>
				</div>
			</div>
		</>
	)
}
