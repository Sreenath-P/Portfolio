import pic from "../components/img.jpg"
export default function Hero() {
	return (
		<section
			id="hero"
			className="px-10 w-full flex  flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
			<div className="flex-1 flex flex-col justify-center items-center gap-7">
				<div>
					<h4 className="text-center text-xl font-bold font-sans">
						H I  &nbsp;   I 'M<br />
					</h4>
					<h1 className="text-center text-emerald-500 text-6xl font-bold font-sans">
						S R E E N A T H - P
					</h1>
				</div>
				<p className="text-center font-sans font-bold">
					F U L L &nbsp; S T A C K  &nbsp;   D E V E L O P E R
				</p>
				<div className="flex-row">
					<a href="https://www.linkedin.com/in/sreenath-p-760232233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
						<img src="linkedin.png" className="h-20 w-20" />
					</a>
					<a href="https://github.com/Sreenath-P">
						<img src="github.png" className="h-20 w-20" />
					</a>
				</div>
				<a className="text-sm  text-emerald-500 sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-emerald-600 font-sans font-bold decoration-transparent"
					href="./Sreenath P.pdf">
					CHECKOUT MY RESUME
				</a>
			</div>

			<div>
				<img src=
					{pic}
					alt="Hello.svg"
					className=" w-80 h-80 bg-cover rounded-full border-emerald-500" />
			</div>
		</section>
	);
}
