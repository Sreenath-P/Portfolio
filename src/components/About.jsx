// About.js 
export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-fit flex flex-col lg:flex-row py-20 
					align-center bg-emerald-200 max-w-5xl mx-auto">
			<div className="flex-1">
				<img src=
					"https://www.pngjoy.com/pngl/84/1798753_announcement-illustration-transparent-png.png"
					alt="About"
					className="w-80 h-80 bg-cover" />
			</div>
			<div className="flex-1 flex flex-col justify-center 
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-emerald-500 
								text-5xl  font-sans hover:underline hover:text-blue-400">
						ABOUT
					</h2>
				</div>
				<p className="para font-sans align-center justify-center text-justify leading-7">
					Results-driven Full Stack Developer proficient in designing, implementing, and maintaining web applications.
					Equipped with a solid foundation in front-end and back-end technologies such as HTML, CSS, JavaScript,
					Node.js, React, etc. In the ever-evolving world of technology, I understand the importance of staying updated. I am dedicated to continuous learning, keeping abreast of the latest trends, tools, and frameworks to ensure that the solutions I deliver are cutting-edge and future-proof.
				</p>
			</div>
		</section>
	);
}
