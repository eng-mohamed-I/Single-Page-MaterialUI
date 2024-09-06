import Footer from "../../component/footer/footer"
import Header from "../../component/header/header"
import HiringSection from "../../component/hiring/hiringsection"
import MentorshipSection from "../../component/mentorship/mentorship"
import Navbar from "../../component/navbar/navbar"
import ProjectPassedSection from "../../component/projectpased/projectpassed"

const Home = () =>  {
    return(
    <>
      <Navbar/>
      <Header/>
      <MentorshipSection/>
      <ProjectPassedSection/>
      <HiringSection/>
      <Footer/>
    </>
    )
    
}

export default Home