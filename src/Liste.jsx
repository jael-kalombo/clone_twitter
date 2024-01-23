import Follow from "./Follow"
import Squid from "./Squid"
import ProfilImage from "./ProfilImage"

export default function Liste(params) {
    return (
        <>
        <div className='trend_liste'>
            <div className='trends'>
              <Squid title='Trends for you' />
              <ProfilImage src='assets/Settings.svg' />
            </div>
            <div className='liste1'>
              <div>
                <Follow title='Trending in Turkey' style={{ fontfamily: "inherit;" }} />
                <Squid title='#SQUID' />
                <Follow title='2,066 Tweets' />
              </div>
              <div>
                <ProfilImage src='assets/More-2.svg' />
              </div>
            </div>
            <div className='liste1'>
              <div>
                <Follow title='Trending in Turkey' />
                <Squid title='#SQUID' />
                <Follow title='2,066 Tweets' />
              </div>
              <div>
                <ProfilImage src='assets/More-2.svg' />
              </div>
            </div>
            <div className='liste1'>
              <div>
                <Follow title='Trending in Turkey' />
                <Squid title='#SQUID' />
                <Follow title='2,066 Tweets' />
              </div>
              <div>
                <ProfilImage src='assets/More-2.svg' />
              </div>
            </div>
            <div className='liste1'>
              <div>
                <Follow title='Trending in Turkey' />
                <Squid title='#SQUID' />
                <Follow title='2,066 Tweets' />
              </div>
              <div>
                <ProfilImage src='assets/More-2.svg' />
              </div>
            </div>
            <div className='more'>
              <Squid title='Show more' />
            </div>
          </div>
        </>
    )
}