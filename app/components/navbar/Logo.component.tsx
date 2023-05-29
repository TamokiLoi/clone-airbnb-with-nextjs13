'use client';

import { IMAGE_SRC, ROUTER_URL } from "@/app/consts";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
    const router = useRouter();
    return (
        <Image
            onClick={() => router.push(ROUTER_URL.HOME)}
            className="hidden md:block cursor-pointer"
            src={IMAGE_SRC.LOGO}
            height={100}
            width={100}
            alt="logo"
        />
    )
}

export default Logo