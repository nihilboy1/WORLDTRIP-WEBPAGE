import { Route, Routes } from 'react-router-dom'
import { ContinentInfos } from './pages/ContinentInfos'
import Home from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/continent/:id" element={<ContinentInfos />} />
    </Routes>
  )
}
