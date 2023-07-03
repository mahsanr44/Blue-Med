import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import Link from "next/link";

const Footer = () => {
    return (
        <Wrapper>
            <footer className="bg-[#F2F0FF] dark:bg-gray-900 mt-32">
               
                <div className=" shadow-gray-300 bg-[#E7E4F8]  text-[#07959D] p-2  text-center font-bold">
                    Designed with ❤️ By
                    <Link href={"https://github.com/mahsanr44"} className="text-[#FA6565]"> Ahsan</Link>
                </div>
            </footer>
        </Wrapper>
    );
};

export default Footer;