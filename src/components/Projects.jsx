// Projects.js 
export default function Projects() {
	return (
		<section id="projects"
			className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto ">
			<h2 className="text-5xl text-emerald-500 font-bold text-center font-sans hover:underline hover:text-blue-400">
				PROJECTS
			</h2>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center 
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-fit">
				<div className="w-80 rounded">
					<a href=
						"https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/"
						className="w-full h-full">
						<img src=
							"http://www.stonehewermoss.co.uk/wp-content/uploads/2014/07/car-crash.jpg"
							alt="Project 1"
							className="w-full h-full 
										bg-cover rounded"/>
					</a>
				</div>
				<div className=" flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center font-sans text-emerald-500">
						<a className="hover:underline hover:text-violet-500"
						>
							Vehicle Collision Detection & Alert System
						</a>
					</h2>
					<p className="pro align-center justify-center text-justify font-sans">
						This project proposes an automated working model based system
						for beforehand detection of vehicle collisions and to generate
						emergency alerts using YOLO v3 algorithm along with the
						integrated techologies of percentage of damage detection &
						number plate identification of collided vehicles. This proposed system is a working model based system to
						detect the vehicle collision and give information to the authorities.It could be used in self driving cars,
						traffic surveillance systems, traffic management, and automated driving applications
					</p>
				</div>
			</div>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-fit">
				<div className="w-80 rounded">
					<a href=
						"https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
						className="w-full h-full">
						<img src=
							"https://maycointernational.com/wp-content/uploads/2020/10/commercial-plastic-recycling.jpeg"
							alt="Project 2"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center font-sans text-emerald-500">
						<a className="hover:underline hover:text-violet-500" >
							E-Plastic Waste Management System
						</a>
					</h2>
					<p className="pro1 align-center justify-center text-justify font-sans">
						This project consists of a basic website that acts as an inteface between common people and
						plastic waste recycling organisations.One of the key features of such a website is to educate visitors about
						the various types of plastic materials, their recyclability, and the proper methods of disposal. Additionally,
						it may provide a comprehensive guide on how individuals and communities can actively participate in plastic
						recycling efforts. This could include information on local recycling facilities, drop-off locations, and
						innovative initiatives aimed at reducing plastic consumption.
					</p>
				</div>


			</div>







			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center 
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-fit">
				<div className="w-80 rounded">
					<a href=
						"https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/"
						className="w-full h-full">
						<img src=
							"https://www.eyeonasia.gov.sg/images/china-overview/social-commerce.jpg"
							alt="Project 1"
							className="w-full h-full 
										bg-cover rounded"/>
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center font-sans text-emerald-500">
						<a className="hover:underline hover:text-violet-500"
						>
							E-Commerce Web Application
						</a>
					</h2>
					<p className="pro align-center justify-center text-justify font-sans">
					A digital marketspace streamlining the online exchange of goods
						and services.This project is an E-commerce web application using React involves building a dynamic and
						responsive user interface that allows users(buyers) to browse products, add items to their cart, and
						complete the checkout process. Also users(sellers) can add their products in the web application.
					</p>
				</div>
			</div>




			
		</section>
	);
}
