// Skills.js 
export default function Skills() { 
	const skills = ["HTML", "CSS", "Javascript", "React", "ExpressJs", "NodeJs", "MongoDB", "Bootstrap", "MySQL", "TailwindCSS" ]; 
	return ( 
		<section id="skills"
			className="px-10 w-full my-40 max-w-5xl mx-auto font-sans"> 
			<h2 className="text-center text-5xl text-emerald-500 font-sans hover:underline hover:text-blue-400"> 
				SKILLS 
			</h2> 
			<div className="mt-10 flex gap-5 justify-center 
							flex-wrap mx-auto max-w-xl"> 
				{skills.map((skill, index) => { 
					return ( 
						<div key={index} 
							className="cursor-pointer px-12 py-10 
										rounded bg-emerald-200 text-lg 
										flex items-center justify-center 
										font-bold hover:shadow-xl"> 
							{skill} 
						</div> 
					)})} 
			</div> 
		</section> 
	) 
}
