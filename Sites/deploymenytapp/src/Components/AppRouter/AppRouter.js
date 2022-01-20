import { Routes, Route } from 'react-router-dom'
import { About } from '../Pages/About/About'
import { Home } from '../Pages/Home/Home'
import { Jobs } from '../Pages/Jobs/Jobs'
import { Products } from '../Pages/Products/Products'
import { Contact } from '../Pages/Contact/Contact'

export const AppRouter = () => {
	return (
		<Routes>
			<Route exact index element={<Home />}></Route>
			<Route exact path="/about" element={<About />}></Route>
			<Route exact path="/products" element={<Products />}></Route>
			<Route exact path="/jobs" element={<Jobs />}></Route>
			<Route exact path="/contact" element={<Contact />}></Route>
			<Route path="*" element={'Siden fandtes ikke'} />
		</Routes>		
	)
}