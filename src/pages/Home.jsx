import Header from "../components/header"
import Categories from "../components/Categories"
import "../styles/Home.css"
import React,{useRef} from 'react'
import ReviewCarousel from "../components/Reviews"
import FoodSearchPage from "./tempSearch"

function Home() {
  const categoriesRef = useRef(null);
  const handleScroll = ()=>{
    categoriesRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div>
        <Header onScrollToCategories={handleScroll}/>
        <Categories refProp={categoriesRef}/>
        <ReviewCarousel />
    </div>
  )
}

export default Home
