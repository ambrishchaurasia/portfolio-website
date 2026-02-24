import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Education from "./components/Education"
import Dsa from "./components/Dsa"
import Dev from "./components/Dev"
import Other from "./components/Other"
import Divider from "./components/Divider"

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
       
      
        <section id="home">
        <Landing />
      </section>   

      <Divider/>

      <section id="development">
        <Dev />
      </section>

      <Divider/>

      <section id="dsa">
        <Dsa />
      </section>

      <Divider/>

     
       <section id="education">
        <Education />
      </section>

      <Divider/>

        <section id="other">
        <Other />
      </section>

    

      <Footer />
    
    
    </div>
    
  )
}
// App.jsx
console.log('App render');
export default App