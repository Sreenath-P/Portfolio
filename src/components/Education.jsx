// export default function Education() {
// 	return (
// 		<section id="education"
// 			className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto ">
// 			<h2 className="text-5xl text-emerald-500 font-bold text-center font-sans hover:underline hover:text-blue-400">
// 				EDUCATION
// 			</h2>
// 			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center 
// 							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
// 							hover:shadow-xl hover:scale-[102%] w-full">
// 				<div className="w-80 rounded"> 
// 				<a href= 
// "https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/"
// 						className="w-full h-full"> 
// 						<img src= 
// "https://media.geeksforgeeks.org/wp-content/uploads/20230927120905/gfg.png"
// 							alt="Project 1"
// 							className="w-full h-full 
// 										bg-cover rounded"/> 
// 					</a> 
// 				</div> 
// 				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
// 					<h2 className="font-bold text-xl text-center font-sans text-emerald-500">
// 						<a className="hover:underline hover:text-violet-500"
// 						>
// 							JAWAHARLAL COLLEGE OF ENGINEERING & TECHNOLOGY
// 						</a>
// 					</h2>
// 					<p className="pro align-center justify-center text-center font-sans">
// 						Bachelor Of Technology<br/>Computer Science & Engineering<br/>2019 - 2023<br/>CGPA : 7.69
// 					</p>
// 				</div>
// 			</div>
// 			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
// 							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
// 							hover:scale-[102%] w-full">
// 				<div className="w-80 rounded"> 
// 					<a href= 
// "https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
// 					className="w-full h-full"> 
// 						<img src= 
// "https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
// 							alt="Project 2"
// 							className="w-full h-full bg-cover rounded" /> 
// 					</a> 
// 				</div> 
// 				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
// 					<h2 className="font-bold text-xl text-center font-sans text-emerald-500">
// 						<a className="hover:underline hover:text-violet-500" >
// 							AKNMMAMHSS KATTUKULAM
// 						</a>
// 					</h2>
// 					<p className="pro1 align-center justify-center text-center font-sans">
// 						Higher Secondary School Education<br/>Computer Science<br/>2017 - 2019<br/>Percentage : 87%
// 					</p>
// 				</div>


// 			</div>



// 			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
// 							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
// 							hover:scale-[102%] w-full">
// 				<div className="w-80 rounded"> 
// 					<a href= 
// "https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
// 					className="w-full h-full"> 
// 						<img src= 
// "https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
// 							alt="Project 2"
// 							className="w-full h-full bg-cover rounded" /> 
// 					</a> 
// 				</div> 
// 				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
// 					<h2 className="font-bold text-xl text-center font-sans text-emerald-500">

// 							AKNMMAMHSS KATTUKULAM

// 					</h2>
// 					<p className="pro1 align-center justify-center text-center font-sans">
// 						High School Education<br/>2016 - 2017<br/>Percentage : 98%
// 					</p>
// 				</div>


// 			</div>
// 		</section>
// 	);
// }





import React from "react";

const education = () => {
	const education = [
		{
			title: "JAWAHARLAL COLLEGE OF ENGINEERING & TECHNOLOGY (JCET)",
			degree:
				"Bachelor Of Technology",
			batch: "Computer Science & Engineering",
			year: "2019 - 2023",
			cgpa: " CGPA : 7.69",
			photo: "https://jawaharlalcolleges.com/images/about-img.jpg",
		},
		{
			title: "AKNMMA MEMORIAL HSS KATTUKULAM",
			degree:
				"Higher Secondary School Education",
			batch: "Computer Science",
			year: "2017 - 2019",
			cgpa:"Percentage : 87%",
			photo: "https://scontent.fcok7-1.fna.fbcdn.net/v/t31.18172-8/457368_361210030621903_193894542_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=be3454&_nc_ohc=dbXiGyAzd10AX_q_XUG&_nc_ht=scontent.fcok7-1.fna&oh=00_AfB-S1kHXu5wscGcxen5QJS9nJYX85-DurXecr1aMAcmfA&oe=65CEE773",
		},
		{
			title: "AKNMMA MEMORIAL HSS KATTUKULAM",
			degree:
				"High School Education",
			batch: "Kerala State Board",
			year: "2016 - 2017",
			cgpa: "Percentage : 98%",
			photo: "https://tse3.mm.bing.net/th?id=OIP.GeDqivWO7ULlKegqWbKDZAHaFj&pid=Api&P=0&h=180",
		},
	];
	return (
		<div className="md:px-10 px-7 my-8" id="education">
			<h2 className="text-5xl text-emerald-500 font-bold text-center font-sans hover:underline hover:text-blue-400 px-6 justify-center items-center pt-40">
				EDUCATION
			</h2>

			{/* featured education */}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
				{education.map((education, index) => {
					return (
						<div
							key={index}
							className="flex flex-col shadow-sm md:w-[343px] bg-emerald-200 max-h-max p-4 rounded font-sans"
						>
							<a
								href={education.photo}
								target="_blank"
								rel="noreferrer"
								className="mb-4 h-full pl-2 "
							>
								<img src={education.photo} alt={education.title} className=" h-40 w-80" />
							</a>
							<h3 className="text-primary font-bold text-lg text-emerald-500 text-center ">
								{education.title}
							</h3>
							<p className=" mt-1  text-center">{education.degree}</p>
							<p className=" mt-1 text-center">{education.batch}</p>
							<p className=" mt-1 text-center">{education.year}</p>
							<p className=" mt-1 text-center">{education.cgpa}</p>

						</div>
					);
				})}
			</div>
		</div>
	);
};

export default education;