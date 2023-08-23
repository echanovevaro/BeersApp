import { useState, useEffect } from 'react'

export const useApi = () => {
	const [beers, setBeers] = useState([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [error, setError] = useState(null)
	let urlPag = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=12`

	useEffect(() => {
		const fetchData = () => {
			if (currentPage < 1) {
				setCurrentPage(1)
			} else {
				setLoading(true)
				fetch(urlPag)
					.then((response) => response.json())
					.then((data) => {
						if (!data || data.length === 0) {
							setCurrentPage((prevPage) => prevPage - 1)
						} else {
							setBeers(
								data.map((d) => ({
									...d,
									graduation: '',
									approved: false,
									nationality: '',
								})),
							)
						}
					})
					.catch((error) => setError(error))
					.finally(() => setLoading(false))
			}
		}

		fetchData()
	}, [currentPage, urlPag])

	const handlePageChange = (page) => setCurrentPage(page)

	const deleteBeer = (beerId) => {
		try {
			setBeers((prevBeers) => prevBeers.filter((beer) => beer.id !== beerId))
		} catch (error) {
			throw Error(error)
		}
	}

	const addNewBeer = (newBeer) => {
		try {
			setBeers((prev) => [newBeer, ...prev])
		} catch (error) {
			throw Error(error)
		}
	}
	const getBeerById = (beerId) => {
		return beers.find((b) => b.id === beerId)
	}

	const updateBeer = (beerUd) => {
		try {
			setBeers((prevBeers) =>
				prevBeers.map((beer) => (beer.id === beerUd.id ? beerUd : beer)),
			)
		} catch (error) {
			throw Error(error)
		}
	}
	return {
		beers,
		loading,
		error,
		currentPage,
		handlePageChange,
		addNewBeer,
		deleteBeer,
		updateBeer,
		getBeerById,
	}
}
