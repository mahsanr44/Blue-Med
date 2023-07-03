import Link from "next/link";
import { Wrapper } from "../Shared/Wrapper"


const Navbar = () => {
    return (
        <header className="sticky top-0  bg-white backdrop-blur-md bg-opacity-70 z-10">
            <Wrapper>
                <div className=' py-7 mx-5 mt-2 md:px-2 lg:px-12  flex justify-between items-center'>
                    <Link href={"/"}>
                        <h3 className="font-sans text-[#07959D] font-bold uppercase underline underline-offset-4"> Blue Med </h3>
                    </Link>
                    <ul className="flex lg:space-x-16 md:space-x-7  space-x-3 mr-10 md:mr-0 font-semibold">
                        <li>
                            <Link href={"/provider"}>
                                PROVIDER
                            </Link>
                        </li>
                        <li>
                            <Link href={"/patient"}>
                                PATIENT
                            </Link>
                        </li>
                        <li>
                            <Link href={"/request"}>
                                REQUEST CARE                            </Link>
                        </li>
                        <li className="border-2 p-1 px-3 rounded-md border-[#07959D]">
                            <Link href={"/"}>
                                LOG IN
                            </Link>
                        </li>
                    </ul>


                </div>

            </Wrapper>
        </header>
    )
}

export default Navbar