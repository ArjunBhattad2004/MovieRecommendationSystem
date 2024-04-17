import React,{useState} from "react"

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleClick = () => {
      
    }

    return (
        <>
          <div className="main-navbar text-white bg-inherit">
            <div className="navbar-icon flex flex-row px-2">
              <h1 className="font-bold text-4xl">MovieRecommendationSystem</h1>
            </div>
            <div className="navbar-search"></div>
          </div>
        </>
    )
}

export default Navbar