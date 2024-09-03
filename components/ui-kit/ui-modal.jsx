import Image from "next/image";
import closeModalIcon from "@/public/icons/close-modal.svg";
import clsx from "clsx";
import {createPortal} from "react-dom";

/**
 *
 * @param width {{
 *     classname: string
 *     width: 'md' | 'full',
 *     isOpen: boolean
 *     onclose: Function
 * }} props
 * @param className
 * @param children
 * @param isOpen
 * @param onClose
 * @returns
 */
export default function UiModal({width, className, children, isOpen = false, onClose}) {
    const handleClick = (e) =>  {
        const inModal = e.target.closest('[data-id=modal]');
        if(!inModal) {
            onClose();
        }
    }

    if(!isOpen) {
        return null;
    }
    const modal =  (
        <div onClick={handleClick}
             className={clsx('fixed inset-0 bg-slate-900/60 backdrop-blur overflow-y-auto', className)}>
            <div data-id={'modal'}
                className={clsx('bg-white rounded-lg box-border min-h-[320px] mt-10 relative flex flex-col',
                {
                    md: 'max-w-[640px] mx-auto',
                    full: 'mx-5'
                }[width]
            )}>
                <button
                    className={'w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/40' +
                        ' absolute left-[calc(100%_+_12px)] top-0 rounded transition-colors'}
                    onClick={onClose}
                >
                    <Image className={'w-4 h-4'} src={closeModalIcon} alt={'close'}/>
                </button>
                {children}
            </div>
        </div>
    )
    return createPortal(modal, document.getElementById('modals'));
}

UiModal.Header = function UiModalHeader({children, className}) {
    return (
        <div className={clsx(className, 'px-6 pt-6 pb-4 text-2xl')}>{children}</div>
    )
};

UiModal.Body = function UiModalBody({children, className}) {
    return (
        <div className={clsx(className, 'px-6')}>{children}</div>
    )
};


UiModal.Footer = function UiModalFooter({children, className}) {
    return (
        <div className={clsx(className, 'mt-auto p-6 flex gap-4 justify-end')}>{children}</div>
    )
};
