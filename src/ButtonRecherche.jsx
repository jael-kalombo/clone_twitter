export default function ButtonRecherche(props) {
    return (
        <>
            <div className= {`btn ${props.btnBg}`} >
                <img src="assets/Search.svg" alt="" />
                <input type="text" id="search" placeholder="search" />
            </div>
        </>
    )
}