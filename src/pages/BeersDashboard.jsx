import React from 'react'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
export const BeersDashboard = ({
	onNavigate,
	onDetail,
	filteredResults,
	beers,
	onPageChange,
	currentPage,
}) => (
	<>
		<div className='cards'>
			{filteredResults && filteredResults.length > 0
				? filteredResults?.map((beer) => (
						<Card
							key={beer.id}
							{...beer}
							onNavigate={onNavigate}
							onDetail={() => onDetail(beer.id)}
						/>
				  ))
				: beers?.map((beer) => (
						<Card
							key={beer.id}
							{...beer}
							onNavigate={onNavigate}
							onDetail={() => onDetail(beer.id)}
						/>
				  ))}
		</div>
		{!filteredResults ||
			(filteredResults.length === 0 && (
				<Pagination onPageChange={onPageChange} currentPage={currentPage} />
			))}
	</>
)
