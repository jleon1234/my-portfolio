"use client"

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'

import Link from 'next/link'
import Image from 'next/image'
import WorkSliderBtns from '@/components/WorkSliderBtns'

const projects = [
	{
		num: "01",
		category: "fullstack",
		title: "Vilma Ai",
		description: "Vilma Ai: es tu plataforma en Inteligencia Artificial que reúne expertos consultores en todas las áreas claves del marketing digital para proporcionar respuestas inmediatas y contextualizadas a tus consultas.",
		stack: [
			{ name: "Reac.js" },
			{ name: "Nest.Js" },
			{ name: "Mongo DB" },
			{ name: "Open Ai" },
		],
		image: "https://jleon1234.github.io/my-portfolio/assets/work/vilma-ai.png",
		live: "https://app.vilma.ai/login",
		github: "",
		company: {
			name: "Convierte Mas",
			url: "https://conviertemas.com/"
		}
	},
	{
		num: "02",
		category: "fullstack",
		title: "Coppy Assistant",
		description: "Coppy Assistant: Redacta en minutos post persuasivos con el poder de la Inteligencia Artificial",
		stack: [
			{ name: "React.js" },
			{ name: "Nest.js" },
			{ name: "MongoDB" },
			{ name: "Open Ai" },
		],
		image: "https://jleon1234.github.io/my-portfolio/assets/work/copy-assistant.png",
		live: "https://app.copyassistant.ai/login",
		github: "",
		company: {
			name: "Convierte Mas",
			url: "https://conviertemas.com/"
		}
	},
	{
		num: "03",
		category: "Fullstack",
		title: "Mas titulares",
		description: "Mas Titulares: Genera ideas de contenido a partir de una palabras clave que definas",
		stack: [
			{ name: "Laravel" },
			{ name: "Javascript" },
		],
		image: "https://jleon1234.github.io/my-portfolio/assets/work/mas-titulares.png",
		live: "https://mastitulares.conviertemas.com/",
		github: "",
		company: {
			name: "Convierte Mas",
			url: "https://conviertemas.com/"
		}
	},
	
	{
		num: "04",
		category: "Frontend",
		title: "Spacegram",
		description: "Spacegram: Diseña textos para redes sociales, guarda notas con el texto que se usa en publicaciones y los copia en portapapeles con estilo.",
		stack: [
			{ name: "React.js" },
			{ name: "Firebase" },
		],
		image: "https://jleon1234.github.io/my-portfolio/assets/work/spacegram.png",
		live: "https://app.vilma.ai/login",
		github: "",
		company: {
			name: "Convierte Mas",
			url: "https://conviertemas.com/"
		}
	},
]

const Work = () => {

	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		// get current slide index
		const currentIndex = swiper.activeIndex;

		// update project state based in current slide index
		setProject(projects[currentIndex])
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className='flex flex-col xl:flex-row xl:gap-[30px]'>
					<div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ' >
						<div className='flex flex-col gap-[30px] h-[50%] ' >
							{/* Outline num  */}
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
								{project.num}
							</div>

							{/* project category  */}
							<h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize' >
								{project.category} project
							</h2>

							{/* project description  */}
							<p className='text-white/60' >{project.description}</p>

							{/* project description  */}
							<p className='text-white' >Empresa:  <Link href={project.company.url}  target='_blank' className='text-white/60 ' >{project.company.name}</Link></p>

							{/* stack  */}
							<ul className='flex gap-4' >
								{project.stack.map((item, index) => {
									return (
										<li
											key={index}
											className='text-xl text-accent'
										>
											{item.name}
											{index !== project.stack.length - 1 && ", "}
										</li>
									)
								})}
							</ul>

							{/* border  */}

							<div className="border border-white/20"></div>

							{/* buttons  */}
							<div className='flex items-center gap-4 ' >
								{/* Live project  */}
								<Link href={project.live}>
									<TooltipProvider
										delayDuration={100}
									>
										<Tooltip>
											<TooltipTrigger
												className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'
											>
												<BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>

								{/* Github  */}

								{
									project.github == ! "" && (<Link href={project.github}>
										<TooltipProvider
											delayDuration={100}
										>
											<Tooltip>
												<TooltipTrigger
													className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'
												>
													<BsGithub className='text-white text-3xl group-hover:text-accent' />
												</TooltipTrigger>
												<TooltipContent>
													<p>Github Repository</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>)
								}


							</div>


						</div>

					</div>

					{/* slider  */}
					<div className='w-full xl:w-[50%] ' >
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className='xl:h-[520px] mb-12'
							onSlideChange={handleSlideChange}
						>
							{projects.map((project, index) => {
								return (
									<SwiperSlide
										key={index}
										className='w-full'
									>
										<div className='h-[410px] relative group flex justify-center items-center bg-pink-50/20' >

											{/* {overlay } */}
											<div className='abosulte top-0 bottom-0 w-fulll h-full bg-black/10 z-10' >

											</div>

											{/* image  */}
											<div>
												<Image
													src={project.image}
													fill
													className=''
													alt=""
												/>
											</div>
										</div>
									</SwiperSlide>
								)
							})}

							{/* Slider button  */}
							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
							/>
						</Swiper>

					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Work