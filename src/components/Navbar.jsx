// Navbar.js 
export default function Navbar() { 
	return ( 
		<nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
						backdrop-blur-lg fixed top-0 z-10 bg-emerald-200"> 
			<div className="container flex flex-row lg:flex-row 
							gap-5 justify-between w-full 
							items-center max-w-5xl mx-auto"> 
				<h3 className="text-2xl text-emerald-500 font-bold font-sans"> 
				SREENATH
				</h3> 
				{/* <ul className="flex gap-3 align-center p-1 flex-wrap">  */}
					{/* <li>  */}
					<a className="text-sm  text-emerald-500 sm:text-base px-2 lg:px-5 
									py-2 transition rounded hover:text-white 
									hover:bg-emerald-600 font-bold font-sans decoration-transparent"
						href="#hero"> 
						HOME
						</a> 
						<a className="text-sm text-emerald-500 sm:text-base px-2 lg:px-5 
									py-2 transition rounded hover:text-white 
									hover:bg-emerald-600 font-bold font-sans decoration-transparent"
						href="#about"> 
						ABOUT
						</a> 
					{/* </li>  */}
					{/* <li>  */}

					<a className="text-sm  text-emerald-500 sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-emerald-600 font-sans font-bold decoration-transparent"
							href="#education"> 
							EDUCATION
						</a> 
						<a className="text-sm text-emerald-500 sm:text-base px-5 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-emerald-600 font-bold font-sans decoration-transparent"
							href="#skills"> 
							SKILLS
						</a> 
					{/* </li>  */}
					{/* <li>  */}
						<a className="text-sm  text-emerald-500 sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-emerald-600 font-sans font-bold decoration-transparent"
							href="#projects"> 
							PROJECTS
						</a> 
					{/* </li>  */}
					{/* <li>  */}
						<a className="text-sm  text-emerald-500 sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-emerald-600 font-sans font-bold decoration-transparent"
							href="#contact"> 
							CONTACT
						</a> 
					{/* </li>  */}
				{/* </ul>  */}
			</div> 
		</nav> 
	); 
}
