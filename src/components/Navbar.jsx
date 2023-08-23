import { useEffect, useState } from 'react'
import './Navbar.css'
import { BeersDashboard } from '../pages/BeersDashBoard'

export default function Navbar({
	onSearch,
	onNavigate,
	currentComponent,
	handleDeleteBeer,
	handleUpdateBeer,
	onPageChange,
}) {
	const [querySearch, setQuerySearch] = useState('')
	const [showMenu, setShowMenu] = useState(false)

	useEffect(() => {
		onSearch(querySearch)
	}, [querySearch])

	function handleChange(e) {
		let query = e.target.value
		setQuerySearch(query)
	}

	function toggleMenu() {
		setShowMenu(!showMenu)
	}
	function returnDashboard() {
		setQuerySearch('')
		onNavigate('Home')
		onPageChange(1)
	}
	return (
		<>
			<nav className='container--nav container--nav--fill'>
				<div className='brand'>
					<img src='./beer1.png' alt='logo' onClick={returnDashboard} />
				</div>

				<div className='burger' onClick={toggleMenu}>
					<div></div>
					<div></div>
					<div></div>
				</div>

				<ul className={`nav__links ${showMenu ? 'show' : ''}`}>
					{currentComponent === 'Detail' ? (
						<>
							<li>
								<button
									type='button'
									className='nav__search button-cancel'
									onClick={() => onNavigate('Home')}>
									Cancel
								</button>
							</li>
							<li>
								<button
									type='button'
									className='nav__search'
									onClick={() => handleDeleteBeer()}>
									Delete
								</button>
							</li>
							<li>
								<button
									type='button'
									className='nav__search'
									onClick={() => handleUpdateBeer()}>
									Update
								</button>
							</li>
						</>
					) : currentComponent === 'Home' ? (
						<>
							<li>
								<button
									type='button'
									className='nav__search'
									onClick={() => onNavigate('Create')}>
									Create
								</button>
							</li>
							<li>
								<input
									type='text'
									className='nav__search'
									placeholder='Search...'
									value={querySearch}
									onChange={handleChange}
								/>
							</li>
						</>
					) : (
						<>
							<li>
								<button
									type='button'
									className='nav__search'
									onClick={() => onNavigate('Create')}>
									Create
								</button>
							</li>
							<li>
								<button
									type='button'
									className='nav__search button-cancel'
									onClick={() => onNavigate('Home')}>
									Cancel
								</button>
							</li>
						</>
					)}
				</ul>
			</nav>
			{currentComponent === 'Home' && <BeersDashboard />}
		</>
	)
}
