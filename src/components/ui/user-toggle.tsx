"use client"

import * as React from "react"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import "@/app/globals.css"

import logo from "@/assets/logo/logo_Inverted.png"

export function UserToggle() {
    const { data: session } = useSession();
    const router = useRouter();
    const handleSignOut = async () => {
        try {
            await signOut({ callbackUrl: "/" });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="rounded w-10 h-10" variant="outline" size="icon">
                    {session?.user?.image ? (
                        <Image
                            className="profileIcon rounded"
                            src={session.user.image || logo} // Fallback image if session.user.image is undefined
                            alt="Profile image"
                            width={39}
                            height={39}
                        />
                    ) : (
                        <User className="h-[1.2rem] w-[1.2rem]" />
                    )}

                    <span className="sr-only">User menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => alert("Profile")}>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { router.push("/settings") }}>
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
