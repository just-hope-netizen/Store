
type IconProps = {
    src: string,
    alt: string,
    onClick: () => void,
    className?: string

}



const IconButton = (props: IconProps) => {
    return <button className={`icon-btn ${props.className}`} onClick={props.onClick}>
        <img src={props.src} alt={props.alt} />
    </button>
}
export default IconButton;
