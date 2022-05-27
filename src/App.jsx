import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import SoftSkills from "./pages/SoftSkills";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
 
  return (
    <div className="App">
   <Header />
   <main>
<span className="tags tags-pading">&lt;html&gt;</span>
          <span className="tags tags-pading">   &lt;body&gt;</span>
          
      <Routes>
      
          
          
          <Route path="/contactez-moi" element={<Contact />} />
          <Route path="/mon-blog" element={<Blog />} />
          <Route path="/mes-realisations" element={<Works />} />
          <Route path="/" element={<Home />} />

          
       
        <Route path="/connaissance" element={<SoftSkills />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <span className="tags tags-pading">    &lt;/body&gt;</span>
          <span className="tags tags-pading">&lt;/html&gt;</span>
          </main>
         




    </div>
  );
}

export default App;
