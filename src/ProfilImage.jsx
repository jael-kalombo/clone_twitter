export default function ProfilImage (props) {

    return(
        <>
        <img src={props.src}  alt="photo de profil" className= {`img ${props.name}`} />
        </>
    )

}