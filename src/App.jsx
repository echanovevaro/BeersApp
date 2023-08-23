import { useState } from 'react'
import Navbar from './components/Navbar'
import { useApi } from './services/hooks/useApi'

import BeerDetail from './pages/BeerDetail'
import CreateNewBeer from './pages/CreateNewBeer'
import { BeersDashboard } from './pages/BeersDashBoard'
import Loading from './components/Loading'
import Error from './components/Error'
import ModalDelete from './components/ModalDelete'

export default function App() {
	const {
		beers,
		loading,
		error,
		currentPage,
		handlePageChange,
		addNewBeer,
		deleteBeer,
		updateBeer,
		getBeerById,
	} = useApi()
	const [currentComponent, setCurrentComponent] = useState('Home')
	const [filteredResults, setFilteredResults] = useState([])
	const [detailedBeer, setDetailedBeer] = useState({})
	const [showModal, setShowModal] = useState(false)

	function handleSearch(query) {
		if (query.length > 3) {
			let results = beers.filter((b) =>
				b.name.toLowerCase().includes(query.toLowerCase()),
			)
			setFilteredResults(results)
		} else setFilteredResults([])
	}

	function handleBeerDeail(id) {
		let detail = getBeerById(id)
		setDetailedBeer(detail)
		setCurrentComponent('Detail')
	}

	function handleDeleteBeer() {
		setShowModal(true)
	}

	const handleConfirm = () => {
		deleteBeer(detailedBeer.id)
		setShowModal(false)
		setCurrentComponent('Home')
	}

	const handleCancel = () => {
		setShowModal(false)
	}

	function handleUpdateBeer() {
		setCurrentComponent('Update')
	}

	function handleNavigateTo(page) {
		setCurrentComponent(page)
	}
	if (error) {
		return <Error />
	}
	if (loading) {
		return <Loading />
	}
	return (
		<div className='container'>
			<ModalDelete
				beers={beers}
				detailedBeer={detailedBeer}
				show={showModal}
				onConfirm={handleConfirm}
				onCancel={handleCancel}
			/>

			<div className='navbar-container'>
				<Navbar
					onSearch={handleSearch}
					onNavigate={handleNavigateTo}
					currentComponent={currentComponent}
					handleDeleteBeer={handleDeleteBeer}
					handleUpdateBeer={handleUpdateBeer}
					onPageChange={handlePageChange}
				/>
			</div>

			<div className='grid-container'>
				{currentComponent === 'Home' && (
					<BeersDashboard
						beers={beers}
						filteredResults={filteredResults}
						onDetail={handleBeerDeail}
						onPageChange={handlePageChange}
						onNavigate={handleNavigateTo}
						currentPage={currentPage}
					/>
				)}
				{currentComponent === 'Detail' && (
					<BeerDetail
						detailedBeer={detailedBeer}
						onNavigate={handleNavigateTo}
						handleUpdateBeer={handleUpdateBeer}
					/>
				)}
				{currentComponent === 'Create' && (
					<CreateNewBeer addNewBeer={addNewBeer} onNavigate={handleNavigateTo} />
				)}
				{currentComponent === 'Update' && (
					<CreateNewBeer
						addNewBeer={addNewBeer}
						onNavigate={handleNavigateTo}
						detailedBeer={detailedBeer}
						updateBeer={updateBeer}
					/>
				)}
			</div>
		</div>
	)
}
