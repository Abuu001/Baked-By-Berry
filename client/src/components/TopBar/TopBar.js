import React, { useEffect, useState } from 'react';
import "./TopBar.css"
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextAPI/StateProvider';
import { auth } from '../../firebase';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function TopBar() {

    const [{basket,user},dispatch] = useStateValue(); 
    const [openSidebar,setOpenSidebar] = useState(false);
    

    const handleSignout=()=>{
        if(user){
            auth.signOut();
        }
    }

    const sidebarNav=()=>{
        setOpenSidebar(prev=>!openSidebar)

        //checks if window is > 502 px set opensidebar to close automatically 
   //     window.innerWidth > 502 ?  setOpenSidebar(false) : openSidebar     
    }

    useEffect(()=>{
        if( window.innerWidth > 502){
            setOpenSidebar(false) 
            console.log("hey")
        }
        console.log(window.innerWidth)
        return()=>{
             
        }
    },[window.innerWidth])
    return (
        <div className="TopBar">

            <div className="section1">
                <Link to="/">
                    <div className="header__logo">
                        <svg id="fi_2909822" height="89" viewBox="0 0 512 512" width="59" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m233.654 171.08s9.389 17.813 11.877 24.023c15.479 38.8 50.724 56.1 88.749 46.216l7.912-2.053a9.391 9.391 0 0 0 7.05-7.885c-.013-.809-.031-1.66-.062-2.517-.04-.241-.093-.489-.155-.733l-2-7.6c-9.574-36.5-46.775-56.811-85.624-51.305-6.891.974-27.747 1.854-27.747 1.854z" fill="#5d8430"></path><path d="m332.811 218.924 7.367-3.541a9.621 9.621 0 0 0 3.934-3.491 67.6 67.6 0 0 1 2.916 8.637l2 7.6c.062.244.115.492.155.733.031.857.049 1.708.062 2.517a9.391 9.391 0 0 1 -7.05 7.885l-7.912 2.053c-33.1 8.6-64.085-3.4-81.768-32.239 22.402 19.714 52.14 23.394 80.296 9.846z" fill="#59752c"></path><path d="m342.645 142.926c-.535-47.87 9.213-89.559 28.982-124.02a7.946 7.946 0 0 0 -.755-9 7.987 7.987 0 0 0 -9.2-2.314c-51.556 21.046-102.052 57.15-142.75 102.163-47 51.98-77.334 111.738-87.739 172.827a6.157 6.157 0 0 0 4.773 7.125 5.991 5.991 0 0 0 7.02-4.894c9.986-58.913 39.324-116.663 84.847-167.013 30.819-34.084 67.377-62.886 105.663-83.58-27.63 29.353-49.733 68.532-64.865 115.455-18.852 58.457-26.268 125.56-21.446 194.056a6 6 0 0 0 5.979 5.58c.141 0 .284-.006.428-.016a6 6 0 0 0 5.564-6.406c-4.648-66.024 2.773-133.334 20.9-189.531 16.119-49.985 40.3-90.72 70.674-119.455-13.784 31.808-20.526 68.39-20.07 109.157.524 47 11.009 99.278 30.32 151.192a6 6 0 0 0 8.357 3.251 6.145 6.145 0 0 0 2.813-7.642c-18.79-50.561-28.987-101.368-29.495-146.935z" fill="#2b2a3e"></path><path d="m142.243 258.062a12.142 12.142 0 0 1 -15.288 7.756l-10.266-3.128c-49.3-14.985-76.743-58.424-67.319-112.322 1.511-8.645 3.286-34.959 3.286-34.959s23.92 13.3 32.3 16.923c46.518 20.154 73.974 67.205 60.9 113.845-.013.039-.021.069-.029.1-.287.935-.568 1.862-.824 2.769z" fill="#6b9337"></path><path d="m142.243 258.062 2.757-9.016c.256-.907.537-1.834.824-2.769.008-.031.016-.061.029-.1a87.106 87.106 0 0 0 3.211-21.111l-9.67-.685c-46.883-3.293-81.308-33.727-89.152-80.514-.29 2.6-.586 4.867-.871 6.5-9.424 53.9 18.021 97.337 67.319 112.322l10.266 3.128a12.142 12.142 0 0 0 15.287-7.755z" fill="#59752c"></path><path d="m435.137 158.65s-.025 20.136.662 26.791c4.345 41.545-18.807 73.255-57.065 82.193l-7.959 1.864a9.392 9.392 0 0 1 -9.909-3.7c-.365-.723-.745-1.484-1.116-2.257-.077-.233-.145-.477-.2-.721l-1.768-7.658c-8.506-36.768 14.979-72.049 51.932-85.246 6.55-2.346 25.423-11.266 25.423-11.266z" fill="#5d8430"></path><path d="m369.617 247.127-8.169.293a9.638 9.638 0 0 1 -5.107-1.26 67.709 67.709 0 0 0 1.437 9l1.768 7.658c.059.244.127.488.2.721.371.773.751 1.534 1.116 2.257a9.392 9.392 0 0 0 9.909 3.7l7.959-1.864c33.3-7.78 55.148-32.818 57.386-66.574-10.66 27.874-35.274 44.965-66.499 46.069z" fill="#59752c"></path><path d="m476.53 320.59c14.93 44.56-7.43 104.34-57.73 120.44-30.34 9.7-57.6 5.15-78.93-7.64a90.836 90.836 0 0 0 4.66-28.25c0-38.13-13.25-70.45-49.27-70.45-1.21 0-2.48.07-3.78.2 2.42-17.34 12.38-31.24 33.84-38.43 10.25-3.43 29.99-1.62 41.27-4.3q1.125-.27 2.13-.6c10.92-3.62 26.11-17.89 38.71-22.11 34.15-11.44 56.98 14.99 69.1 51.14z" fill="#be1e2d"></path><path d="m348.71 363.27c-12.688-24.216-14.638-48-9.3-68.938-5.376.329-10.366.88-14.094 2.128-21.46 7.19-31.42 21.09-33.84 38.43 1.3-.13 2.57-.2 3.78-.2 36.02 0 49.27 32.32 49.27 70.45a90.836 90.836 0 0 1 -4.66 28.25c21.33 12.79 48.59 17.34 78.93 7.64 19.981-6.395 35.547-19.687 46.125-36.176-40.58 14.346-94.021.723-116.211-41.584z" fill="#a31d2d"></path><path d="m180.53 281.83c28.1 4.38 39.08 26.47 39.57 54.13a49.4 49.4 0 0 0 -11.27-1.74c-40.43 0-52.84 31.94-52.84 70.92a99.561 99.561 0 0 0 4.05 28.07 84.37 84.37 0 0 1 -48.3 6.21c-60.91-10.34-86.88-62.97-79.65-109.41 6-38.52 23.17-68.17 63.12-61.95 11.39 1.77 29.62 13.83 40.78 15.6.35.06.7.1 1.07.15 11.52 1.33 30.75-3.96 43.47-1.98z" fill="#be1e2d"></path><path d="m89.339 319.39c2.952-18.95 8.616-35.742 18.358-47.184a54.8 54.8 0 0 0 -12.487-4.146c-39.95-6.22-57.12 23.43-63.12 61.95-7.23 46.44 18.74 99.07 79.65 109.41a84.37 84.37 0 0 0 48.3-6.21q-.984-3.345-1.728-6.745c-53.253-14.358-75.765-63.447-68.973-107.075z" fill="#991f33"></path><path d="m291.48 334.89c1.3-.13 2.57-.2 3.78-.2 36.02 0 49.27 32.32 49.27 70.45a90.836 90.836 0 0 1 -4.66 28.25c-12.03 36.66-46.16 68.18-88.34 67.6-49.35-.67-80.83-31.46-91.49-67.78a99.561 99.561 0 0 1 -4.05-28.07c0-38.98 12.41-70.92 52.84-70.92a49.4 49.4 0 0 1 11.27 1.74c10.71 2.64 23.29 7.37 31.43 7.4.53 0 1.07-.01 1.63-.05 10.49-.62 26.06-7.17 38.32-8.42z" fill="#be1e2d"></path><path d="m331.522 451.144c-42.452 25.173-85.372 15.326-113.413-10.1a99.564 99.564 0 0 1 -18.1-21.835c-19.3-31.559-25.746-63.537 3.122-84.743-35.893 2.908-47.142 33.594-47.142 70.673a99.561 99.561 0 0 0 4.05 28.07c10.66 36.32 42.14 67.11 91.49 67.78 35.377.486 65.083-21.611 80.846-50.38-.287.176-.563.363-.853.535z" fill="#a31d2d"></path><g opacity=".6"><path d="m65.445 378.55a6 6 0 0 1 -4.932-2.576c-18.012-25.913-4.552-44.2-3.97-44.964a6 6 0 0 1 9.6 7.206c-.438.616-8.549 12.527 4.229 30.909a6 6 0 0 1 -4.922 9.425z" fill="#e9e9e9"></path></g><g opacity=".6"><path d="m187.615 436.63a5.993 5.993 0 0 1 -4.931-2.574c-18.025-25.915-4.552-44.2-3.97-44.968a6 6 0 0 1 9.593 7.21c-.438.616-8.556 12.525 4.229 30.906a6 6 0 0 1 -4.921 9.426z" fill="#e9e9e9"></path></g></svg>
                    </div>
                </Link>

                <div className="header__search">
                    <input   className="header__searchInput" type="text"/>
                    <SearchIcon  className="header__searchIcon" />

                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            <AddShoppingCartIcon />
                            <span className="header__optionLineTwo   header__basketCount">{basket?.length || 0}</span>
                        </div>
                    </Link>
                    <MoreVertIcon  className="more__Icon" onClick={sidebarNav}  fontSize="large"/>
                </div>
            </div>

            <div className="section2">

                <nav className="header__nav">
                    <Link  to={!user  && "/login"}>
                        <div className="header__option" onClick={handleSignout}>
                                <span className="header__optionLineOne">Hello  {user?.email || 'Guest'}</span>
                                <span className="header__optionLineTwo">{user ?  'Sign Out' : 'Sign In' }</span>
                        </div>             
                    </Link>

                    <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">Orders</span>
                    </div>

                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                    </div>

                </nav>
            </div>

        { openSidebar ?
                                  <div className="section3">
                                  <aside>
                                  <ArrowBackIosIcon  className="more__Icon" onClick={sidebarNav} />
                                      <div className="section3__contents"> 
                                      
                                          <Link  to={!user  && "/login"}>
                                            <div className="sidebar__option" onClick={handleSignout}>
                                                    <span className="sidebar__optionLineOne">Hello {user?.email || 'Guest'}</span>
                                                    <span className="sidebar__optionLineTwo">{user ?  'Sign Out' : 'Sign In' }</span>
                                            </div>             
                                          </Link>

                                          <div className="sidebar__option">
                                                <span className="sidebar__optionLineOne">Returns</span>
                                                <span className="sidebar__optionLineTwo">Orders</span>
                                        </div>
                                         
                                        <div className="sidebar__option">
                                            <span className="sidebar__optionLineOne">Your</span>
                                                <span className="sidebar__optionLineTwo">Prime</span>
                                        </div>

                                            <Link to="/checkout">
                                                <div className="sidebar__option">
                                                    <span className="sidebar__optionLineOne">Shopping Cart</span>
                                                        <span className="sidebar__optionLineTwo">   <AddShoppingCartIcon /></span>
                                                </div>
                                            </Link>
                                 
                                      </div>
                                  </aside>
                              </div>
                            :  null  }
        </div>
    )
}

export default TopBar
