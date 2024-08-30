import backArrowSrc from '@/public/icons/back-arrow.svg'
import Link from "next/link";
import Image from "next/image";
import starSrc from '@/public/icons/star.svg'
import usersCountSrc from '@/public/icons/users-count.svg'
import timeSrc from '@/public/icons/time.svg'

export function GameTitle() {
    return (
        <div className={'flex flex-col'}>
            <div className={'flex items-center'}>
                <Link href={'#'} className={'mr-2'}>
                    <Image src={backArrowSrc} alt={'back'}/>
                </Link>
                <span className={'text-teal-600 text-xs'}>На главную</span>
            </div>
            <h3 className={'text-4xl mb-1'}>Крестики нолики</h3>
            <div className={'flex mb-px items-center text-xs text-slate-400'}>
                <Image src={starSrc} alt={'star'} className={'mr-3'}/>
                <Image src={usersCountSrc} alt={'users count'} className={'mr-1'}/>
                <span className={'text-xs mr-3 text-slate-400'}>2</span>
                <Image src={timeSrc} alt={'time'} className={'mr-1'}/>
                <span>1 минута на ход</span>
            </div>
        </div>
    )
}