import Squid from "./Squid"
import ProfilImage from "./ProfilImage"
import Buttons from "./Button"
import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <>
            <div className='menu'>
                    <div className='sousMenu1'>
                        <ProfilImage src='assets/Twitter.svg'name='width_img' />
                    </div>
                <Link to="" >
                <div className='sousMenu2'>
                    <ProfilImage src='assets/Vector.svg'name='width_img' />
                    <Squid title='Home' />
                </div>
                </Link>
                <div className='sousMenu2'>
                    <ProfilImage src='assets/Explore.svg' name='width_img' />
                    <Squid title='Explore' />
                </div>
                <div className='sousMenu2'>
                    <ProfilImage src='assets/Notifications.svg'name='width_img' />
                    <Squid title='Notifications' />
                </div>
                <div className='sousMenu2'>
                    <ProfilImage src='assets/Messages.svg'name='width_img' />
                    <Squid title='Messages' />
                </div>
                <div className='sousMenu2'>
                    <ProfilImage src='assets/Bookmarks.svg'name='width_img' />
                    <Squid title='Bookmarksme' />
                </div>
                <div className='sousMenu2'>
                    <ProfilImage src='assets/Lists.svg'name='width_img' />
                    <Squid title='Lists' />
                </div>
                <Link to="/profil">
                <div className='sousMenu2'>
                    <ProfilImage src='assets/Profile.svg'name='width_img' />
                    <Squid title='Profile' />
                </div>
                </Link>
                <div className='sousMenu2'>
                    <ProfilImage src='assets/More.svg'name='width_img' />
                    <Squid title='More' />
                </div>
                <div>
                    <Buttons name='Tweet' btnBg="btn-tweet" />
                </div>
            </div>
        </>
    )
}