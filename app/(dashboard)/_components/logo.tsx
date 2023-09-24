import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return(
        <Link href={"/"}>
        <Image
        height={130}
        width={130}
        alt="logo"
        src="/logoipsum-245.svg" />
        </Link>

    )
}