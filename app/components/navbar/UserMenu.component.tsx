'use client';

import { Avatar } from "@/components";
import { ROUTER_URL, USER_MENU_ITEM_NAME } from "@/consts";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem.component";

// interface UserMenuProps {
//     currentUser?: SafeUser | null
// }

interface IMenuItem {
    name: string,
    isRouter: boolean,
    url: string,
    event: any
}

const UserMenu: React.FC<any> = () => {
    const router = useRouter();

    // const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    // const rentModal = useRentModal();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const clickEvent = () => {

    }

    // const onRent = useCallback(() => {
    //     if (!currentUser) {
    //         return loginModal.onOpen();
    //     }

    //     rentModal.onOpen();
    // }, [loginModal, rentModal, currentUser]);

    // console.log('1', isOpen)

    const MENU_ITEM_WITH_USER: IMenuItem[] = [
        {
            name: USER_MENU_ITEM_NAME.MY_TRIPS,
            isRouter: true,
            url: ROUTER_URL.TRIPS,
            event: null
        },
        {
            name: USER_MENU_ITEM_NAME.MY_FAVORITES,
            isRouter: true,
            url: ROUTER_URL.FAVORITES,
            event: null
        },
        {
            name: USER_MENU_ITEM_NAME.MY_RESERVATIONS,
            isRouter: true,
            url: ROUTER_URL.RESERVATIONS,
            event: null
        },
        {
            name: USER_MENU_ITEM_NAME.MY_PROPERTIES,
            isRouter: true,
            url: ROUTER_URL.PROPERTIES,
            event: null
        },
        {
            name: USER_MENU_ITEM_NAME.AIR_BNB_YOUR_HOME,
            isRouter: false,
            url: '',
            event: clickEvent()
        },
        {
            name: USER_MENU_ITEM_NAME.LOGOUT,
            isRouter: false,
            url: '',
            event: clickEvent()
        },
    ];

    const MENU_ITEM_WITHOUT_USER: IMenuItem[] = [
        {
            name: USER_MENU_ITEM_NAME.LOGIN,
            isRouter: false,
            url: '',
            event: registerModal.onOpen
        },
        {
            name: USER_MENU_ITEM_NAME.SIGN_UP,
            isRouter: false,
            url: '',
            event: registerModal.onOpen
        },
    ]

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => { }}
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                    "
                >
                    Airbnb your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                    "
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={''} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        bg-white
                        overflow-hidden
                        right-0
                        top-14
                        text-sm
                    "
                >
                    <div className="flex flex-col cursor-pointer">
                        <>
                            {/* {MENU_ITEM_WITH_USER && MENU_ITEM_WITH_USER.map((menu, index) => (
                                <MenuItem
                                    key={index}
                                    label={menu.name}
                                    onClick={
                                        menu.isRouter ? () => router.push(menu.url) : menu.event
                                    }
                                />
                            ))} */}
                            {MENU_ITEM_WITHOUT_USER && MENU_ITEM_WITHOUT_USER.map((menu, index) => (
                                <MenuItem
                                    key={index}
                                    label={menu.name}
                                    onClick={
                                        menu.isRouter ? () => router.push(menu.url) : menu.event
                                    }
                                />
                            ))}
                        </>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu