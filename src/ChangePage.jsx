import NavBar from "./Navbar";
import Header from "./Header";
import Tweet from "./Tweet";


export default function ChangePage() {
    return(
        <>
        <div className='page_twitter'>
          <NavBar />
          <Header />
          <Tweet />
          {/* <IconesProfil/> */}
          
        </div>
        </>
    )
}