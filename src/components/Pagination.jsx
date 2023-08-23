import React from 'react'

import './Pagination.css'

export default function Pagination({ currentPage, onPageChange }) {
	return (
		<div className='pagination-container'>
			<div className='pagination'>
				<div className='pagination__link--next'>
					<span
						className='material-symbols-outlined'
						onClick={() => onPageChange(currentPage - 1)}>
						arrow_left_alt
					</span>
					<p className='currentPage'>{currentPage}</p>
					<span
						className='material-symbols-outlined'
						onClick={() => onPageChange(currentPage + 1)}>
						arrow_right_alt
					</span>
				</div>
			</div>
		</div>
	)
}
