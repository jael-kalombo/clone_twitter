import Squid from "./Squid"
import ProfilImage from "./ProfilImage"

export default function Menu() {
    return (
        <>
            <div className='sousMenu2'>
                <ProfilImage src='assets/Vector.svg' />
                <Squid title='Home' />
            </div>
            <div className='sousMenu2'>
                <ProfilImage src='assets/Explore.svg' />
                <Squid title='Explore' />
            </div>
            <div className='sousMenu2'>
                <ProfilImage src='assets/Notifications.svg' />
                <Squid title='Notifications' />
            </div>
            <div className='sousMenu2'>
                <ProfilImage src='assets/Messages.svg' />
                <Squid title='Messages' />
            </div>
            <div className='sousMenu2'>
                <ProfilImage src='assets/Bookmarks.svg' />
                <Squid title='Bookmarksme' />
            </div>
            <div className='sousMenu2'>
                <ProfilImage src='assets/Lists.svg' />
                <Squid title='Lists' />
            </div>
            <div className='sousMenu2'>
                <ProfilImage src='assets/Profile.svg' />
                <Squid title='Profile' />
            </div>
            <div className='sousMenu2'>
                <ProfilImage src='assets/More.svg' />
                <Squid title='More' />
            </div>
        </>
    )
}