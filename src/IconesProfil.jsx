import Follow from "./Follow";
import ProfilImage from "./ProfilImage";
import Squid from "./Squid";

export default function IconesProfil (data) {
    return(
        <>
        <div className="container4">
            <div>
                <ProfilImage src='assets/image 1 (1).png'/>
            </div>
            <div>
                <div className="userTweet">
                    <Squid title='CNN' />
                    <ProfilImage src='assets/Verified.svg' />
                    <Follow title='@nytimes.' />
                    <Follow title='2h' />
                </div>
                <div>
                    <Squid title='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' />
                </div>
                <div>
                    <ProfilImage src='assets/image 3.png' />
                </div>
                <div className="flex">
                    <div className="iconeFlex">
                        <ProfilImage src='assets/Reply.svg' />
                        <Follow title='57' />
                    </div>
                    <div className="iconeFlex">
                        <ProfilImage src='assets/Retweet.svg' />
                        <Follow title='144' />
                    </div>
                    <div className="iconeFlex">
                        <ProfilImage src='assets/React.svg' />
                        <Follow title='184' />
                    </div>
                    <div>
                        <ProfilImage src='assets/Share.svg' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}