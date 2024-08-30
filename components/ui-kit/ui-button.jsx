/**
 * @param {{
 * children,
 * className: string,
 * size: 'md'|'lg',
 * variant: 'primary'|'outline'
 * }} props
 */

export default function UiButton({children, className, size, variant}) {
    const buttonClassName =
        ' transition-colors flex justify-center items-center transition-colors duration-300 ' +
        className +
        {
            md: ' rounded px-6 py-1 text-sm',
            lg: ' rounded-lg px-5 py-2 text-2xl '
        }[size] +
        {
            primary: ' text-white bg-teal-600 hover:bg-teal-500 ',
            outline: ' border border-teal-600 text-teal-600 hover:bg-teal-50 '
        }[variant]

    return <button className={buttonClassName}>{children}</button>
}