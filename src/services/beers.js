// const url = 'https://api.punkapi.com/v2/beers'

// export function getAllBeers(currentPage) {
// 	if (currentPage < 1) return
// 	try {
// 		let urlPag = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=9`
// 		return fetch(urlPag).then((res) => {
// 			if (!res.ok) throw new Error('error feching beers')
// 			return res.json()
// 		})
// 	} catch (error) {
// 		//hay un error en la respuesta
// 		throw Error(error)
// 	}
// }

// export function getSingleBeer(id) {
// 	try {
// 		return fetch(`url/${id}`).then((res) => res.json())
// 	} catch (error) {
// 		throw Error(error)
// 	}
// }
