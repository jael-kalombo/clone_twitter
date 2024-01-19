import ProfilImage from "./ProfilImage"
import Buttons from "./Button"
import IconeTweet from "./IconeTweet"

export default function Header(params) {
    return (
        <>
            <div className='container2'>
                <div className='sousContainer1'>
                    <ProfilImage src="assets/Profile-Photo.svg"></ProfilImage>
                    <input type="text" id='input' placeholder='What´s happening ' />
                </div>
                <div className='sousContainer2'>
                    <IconeTweet />
                    <Buttons name="Tweet" btnBg="btn-blue" />
                </div>
            </div>
        </>
    )
}