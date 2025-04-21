import i18n from 'i18next'
import React from 'react'
import { initReactI18next } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuyNode from './components//pages/BuyNode'
import Header from './components/header/Header'
import Node from './components/pages/Node'
import OnePage from './components/pages/OnePage'
import translationsEn from './locale/translationsEn'
import translationsUz from './locale/translationsUz'

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: translationsEn },
		uz: { translation: translationsUz },
	},
	lng: 'en',
})

function App() {
	const changeLng = value => {
		i18n.changeLanguage(value)
	}
	return (
		<>
			<BrowserRouter>
				<div className='bg-[#000000] h-[100%]'>
					<Header changeLng={changeLng} />
				</div>
				<Routes>
					<Route path='/' element={<OnePage />} />
					<Route path='/node' element={<Node />} />
					<Route path='/buyNode' element={<BuyNode />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
