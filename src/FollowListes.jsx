import ProfilImage from "./ProfilImage"
import Squid from "./Squid"
import Follow from "./Follow"
import Buttons from "./Button"

export default function Followlistes (){
    return(
        <>
         <div className='follow_liste'>
            <div className='follow'>
              <Squid title='Who to follow' />
            </div>
            <div className='container5'>
              <div className='follow_me'>
                <div>
                  <ProfilImage src='assets/Profile-Photo (1).png' />
                </div>
                <div>
                  <div className='user'>
                    <Squid title='The New York Times' />
                    <ProfilImage src='assets/Verified.svg' />
                  </div>
                  <div>
                    <Follow title='@nytimes' />
                  </div>
                </div>
                <div>
                  <Buttons name='Follow' btnBg='btn-follow' />
                </div>
              </div>
              <div className='follow_me'>
                <div>
                  <ProfilImage src='assets/Profile-Photo (3).png' />
                </div>
                <div>
                  <div className='user'>
                    <Squid title='The New York Times' />
                    <ProfilImage src='assets/Verified.svg' />
                  </div>
                  <div>
                    <Follow title='@nytimes' />
                  </div>
                </div>
                <div>
                  <Buttons name='Follow' btnBg='btn-follow' />
                </div>
              </div>
              <div className='follow_me'>
                <div>
                  <ProfilImage src='assets/Profile-Photo (2).png' />
                </div>
                <div>
                  <div className='user'>
                    <Squid title='The New York Times' />
                    <ProfilImage src='assets/Verified.svg' />
                  </div>
                  <div>
                    <Follow title='@nytimes' />
                  </div>
                </div>
                <div>
                  <Buttons name='Follow' btnBg='btn-follow' />
                </div>
              </div>
            </div>
            <div className='more'>
              <Squid title='Show more' />
            </div>
          </div>
        </>
    )
}