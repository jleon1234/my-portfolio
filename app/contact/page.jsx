"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SelectItem } from "@radix-ui/react-select"
import { motion } from "framer-motion"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+593) 969709261"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jleon4811@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adresss",
    description: "Loja, Ecuador"
  },
]


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto" >
        <div className="flex flex-col xl:flex-row gap-[30px]" >
          {/* form  */}
          <div className="xl:h-[54%] order-2 xl:order-none" >
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent" >Let's work together</h3>
              <p className="text-white/60" >Lorem, inpsum</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                <Input
                  type="firstname"
                  placeholder="Firstname"
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  placeholder="Email Adress"
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                />
              </div>

              {/* select  */}
              <Select>
                <SelectTrigger className="w-full" >
                  <SelectValue  placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est" >Web Development</SelectItem>
                    <SelectItem value="cst" >FullStack Project</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea  */}
              <Textarea 
                className="h-[200px]"
                placeholder=""
              />
            </form>
          </div>

          {/* info  */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none b" >
            Info
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact