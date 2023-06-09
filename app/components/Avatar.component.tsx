'use client';

import { IMAGE_SRC } from "@/app/consts";
import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return (
        <Image
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={src || IMAGE_SRC.USER_PLACEHOLDER}
        />
    );
}

export default Avatar;