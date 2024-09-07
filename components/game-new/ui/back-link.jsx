import Link from "next/link";
import Image from "next/image";
import backArrowSrc from "@/public/icons/back-arrow.svg";

export default function BackLink() {
    return (
        <div className={'flex items-center'}>
            <Link href={'#'} className={'mr-2'}>
                <Image src={backArrowSrc} alt={'back'}/>
            </Link>
            <span className={'text-teal-600 text-xs'}>На главную</span>
        </div>
    )
}