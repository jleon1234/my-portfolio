"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'

import {
	SiTailwindcss,
	SiTypescript,
	SiNextdotjs,
	SiWordpress
} from 'react-icons/si'


// about data
const about = {
	title: "Sobre Mi",
	description: "Soy desarrollador Full Stack con experiencia en frontend (React, Next.js) y backend (NestJS). Me apasiona crear soluciones eficientes y adaptarme a los lenguajes y tecnologías que cada proyecto requiera, asegurando calidad y versatilidad en cada desarrollo. ",
	info: [
		{
			fieldName: "Nombre",
			fieldValue: "Juan Pablo"
		},
		{
			fieldName: "Telefono",
			fieldValue: "+593 969709261"
		},
		{
			fieldName: "Experiencia",
			fieldValue: "5+ Years"
		},
		{
			fieldName: "Nacionalidad",
			fieldValue: "Ecuador"
		},
		{
			fieldName: "Email",
			fieldValue: "jleon4811@gmail.com"
		},
		{
			fieldName: "Freelancer",
			fieldValue: "Disponible"
		},
		{
			fieldName: "Idiomas",
			fieldValue: "English (A2), Spanish"
		},

	],
}

// experience data 
const experience = {
	icon: "/assets/resume/badge.svg",
	title: "Mi experiencia",
	description: " Un resumen de mi trayectoria profesional, destacando las empresas en las que he trabajado y los roles que he desempeñado. ",
	items: [
		{
			company: "Convierte Más, USA",
			position: "FullStack Developer",
			duration: "01/08/2019 - 01/2025"
		},
		{
			company: "Instituto IDCI, Ecuador",
			position: "Workpress Developer",
			duration: "1/2020 - 04/2020"
		},
		{
			company: "Qi Esencial, Ecuador",
			position: "Workpress Developer",
			duration: "03/2019 - 12/2019"
		},


	]
}

// edutaion data 
const education = {
	icon: "/assets/resume/cap.svg",
	title: "Mi educación",
	description: " Mi formación académica y profesional, incluyendo cursos, certificaciones y programas que me han permitido especializarme como desarrollador Full Stack. Un recorrido por los conocimientos adquiridos que respaldan la calidad de mi trabajo y mi capacidad de adaptación a nuevas tecnologías. ",
	items: [
		{
			institution: "Universidad Técnica Particular de Loja",
			degree: "Ingeniería en ciencias de la computación",
			duration: "2019"
		},
		{
			institution: "DevTalles",
			degree: "Nest: Desarrollo backend escalable con Node",
			duration: "2023"
		},
		{
			institution: "DevTalles",
			degree: "NestJS + Microservicios: Aplicaciones escalables y modulares",
			duration: "2023"
		},
	]
}


// skills data 

const skills = {
	title: "Mis Habilidades",
	description: "Habilidades técnicas y herramientas que domino, como React, Next.js, NestJS, y WordPress. Mi capacidad para adaptarme a distintos lenguajes y frameworks asegura soluciones personalizadas y efectivas para cada proyecto.",
	skillList: [
		{
			icon: <FaHtml5 />,
			name: "Html"
		},
		{
			icon: <FaCss3 />,
			name: "Css"
		},
		{
			icon: <FaJs />,
			name: "javascript"
		},
		{
			icon: <FaReact />,
			name: "react.js"
		},
		{
			icon: <FaNodeJs />,
			name: "node.js"
		},
		{
			icon: <SiNextdotjs />,
			name: "next.js"
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwinds.css"
		},
		{
			icon: <SiTypescript />,
			name: "typescript"
		},
		{
			icon: <SiWordpress />,
			name: "wordpress"
		},
	]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'



const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}

			className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
		>
			<div className='container mx-auto' >
				<Tabs
					defaultValue='experience'
					className='flex flex-col xl:flex-row gap-[60px]'
				>
					<TabsList
						className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 "
					>
						<TabsTrigger value="experience" >Experiencia</TabsTrigger>
						<TabsTrigger value="education" >Educación</TabsTrigger>
						<TabsTrigger value="skills" >Hablilidades</TabsTrigger>
						<TabsTrigger value="about" >Sobre mi</TabsTrigger>
					</TabsList>

					{/* content  */}
					<div className='min-h-[70vh] w-full ' >
						{/* experience  */}
						<TabsContent value="experience" className="w-full"  >
							<div className='flex flex-col gap-[30px] text-center xl:text-left' >
								<h3 className='text-4xl font-bold' >{experience.title}</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 ' >{experience.description}</p>
								<ScrollArea className="h-[400px]" >
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]' >
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
												>
													<span className='text-accent' >{item.duration}</span>
													<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left' >{item.position}</h3>
													<div className='flex items-center gap-3' >
														<span className='w-[6px] h-[6px] rounded-full bg-accent' ></span>
														<p className='text-white/60' >{item.company}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* education  */}
						<TabsContent value="education" className="w-full"  >
							<div className='flex flex-col gap-[30px] text-center xl:text-left' >
								<h3 className='text-4xl font-bold' >{education.title}</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 ' >{education.description}</p>
								<ScrollArea className="h-[400px]" >
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]' >
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
												>
													<span className='text-accent' >{item.duration}</span>
													<h3 className='text-sm max-w-[260px] min-h-[60px] text-center lg:text-left' >{item.degree}</h3>
													<div className='flex items-center gap-3' >
														<span className='w-[6px] h-[6px] rounded-full bg-accent' ></span>
														<p className='text-white/60 text-md' >{item.institution}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* education  */}
						<TabsContent value="skills" className="w-full h-full"  >
							<div className="flex flex-col gap-[30px]">
								<div className='flex flex-col gap-[30px] text-center xl:text-left' >
									<h3 className='text-4xl font-bold' >{skills.title}</h3>
									<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0' >{skills.description}</p>
								</div>
								<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 gap-4 xl:gap-[30px]' >
									{skills.skillList.map((skill, index) => {
										return (
											<li>
												<TooltipProvider delayDuration={100} >
													<Tooltip>
														<TooltipTrigger
															className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'
														>
															<div
																className='text-6xl group-hover:text-accent transition-all duration-300'
															>
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className='capitalize' >{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										)
									})}
								</ul>
							</div>
						</TabsContent>

						{/* education  */}
						<TabsContent value="about" className="w-full text-center xl:text-left "  >
							<div className='flex flex-col gap-[30px]' >
								<h3 className='text-4xl font-bold' >{about.title}</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0' >{about.description}</p>
								<ul className='grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0' >
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className='flex items-center justify-center xl:justify-start gap-4'
											>
												<span className='text-white/60' >{item.fieldName}</span>
												<span className='text-xl' >{item.fieldValue}</span>
											</li>
										)
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>

		</motion.div>
	)
}

export default Resume