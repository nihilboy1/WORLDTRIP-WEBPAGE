import { CitiesBox } from '../components/CitiesBox/Index'
import { ContinentInfosBanner } from '../components/ContinentInfosBanner/Index'
import { ContinentInfosTexts } from '../components/ContinentInfosTexts/Index'
import { Header } from '../components/Header/Index'

export function ContinentInfos() {
  return (
    <>
      <Header />
      <ContinentInfosBanner />
      <ContinentInfosTexts />
      <CitiesBox />
    </>
  )
}
