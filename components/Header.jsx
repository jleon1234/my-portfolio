import Link from "next/link";
import { Button } from "@/components/ui/button";

// componoents 
import Nav from "./Nav";

import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl-py-12 text-white" >
            <div className="container mx-auto flex justify-between items-center" >
                {/* logo    */}
                <Link href={"/"} >
                    <h1 className="text-4xl font-semibold" >
                        Juan<span className="text-accent" >.</span>
                    </h1>
                </Link>

                {/* desktop nav  */}
                <div className="hidden xl:flex gap-8 items-center" >
                    <Nav />
                    <Link href="https://api.whatsapp.com/send?phone=593969709261" target="_blank" >
                        <Button>Contáctame</Button>
                    </Link>
                </div>

                {/* mobile nav */}

                <div className="xl:hidden">
                    <MobileNav  />
                </div>

            </div>
        </header>
    )
}

export default Header

