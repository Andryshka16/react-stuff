import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Information from './components/InformationPage/Information'
import Navigation from './components/Navigation/Navigation'
import NotesPage from './components/NotesPage/NotesPage'
import NotesState from './components/NotesPage/Notes/NotesState'

export default function App() {
	return (
		<NotesState>
			<BrowserRouter>
				<div className='App'>
					<Navigation />
					<Routes>
						<Route path={'/'} element={<NotesPage />} />
						<Route path={'/info'} element={<Information />} />
					</Routes>
				</div>
			</BrowserRouter>
		</NotesState>
	)
}
