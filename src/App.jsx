import Navbar from "./components/Navbar"; 
import About from "./components/About"; 
import Skills from "./components/Skills"; 
import Projects from "./components/Projects"; 
import Hero from "./components/Hero"; 
import Education from "./components/Education";
import Contact from "./components/Contact"; 

export default function App() { 
	return ( 
		<> 
			<Navbar /> 
			<Hero /> 
			<About />
			<Education/> 
			<Skills /> 
			<Projects /> 
			<Contact /> 
			 
		</> 
	); 
} 
