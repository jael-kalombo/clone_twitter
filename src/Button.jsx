export default function Buttons (props) {
    return (
        <>
        <button className= {`btn ${props.btnBg}`}>{props.name}</button>
        </>
    )
}