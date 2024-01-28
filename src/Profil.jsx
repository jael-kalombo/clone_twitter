import Squid from "./Squid"
import Follow from "./Follow"
import ProfilImage from "./ProfilImage"
import Buttons from "./Button"

export default function Profil() {
    return (
        <>
            <div className="homeProfil">
                <div className="myProfil">
                    <div>
                        <img src="assets/backspace.svg" alt="" className="arrow" />
                    </div>
                    <div>
                        <h3>Jael Kapinga kalombo</h3>
                        <p>0 posts</p>
                    </div>
                </div>
                <div className="colorProfil">
                    <div className="nameProfil" >
                        <h1>j</h1>
                    </div>

                </div>
                <div className='bottom' >
                    <h3>Jael Kapinga kalombo</h3>
                    <p>@KalomboJae19504</p>
                </div>
                <div>
                    <p>Joined January 2024</p>
                    <img src="" alt="" />
                </div>
                <div className='selection' >
                    <p>0 Following</p>
                    <p>0 Following</p>
                </div>
                <div className='first-line' >
                    <p>Posts</p>
                    <p>Replies</p>
                    <p>Highights</p>
                    <p>Media</p>
                    <p>Likes</p>
                </div>
                <div className='marker' >
                    <div className='follow'>
                        <Squid title='Who to follow' />
                    </div>
                    <div className=''>
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
                                    <p>Bienvenue sur le compte officiel de la Présidence de la République Démocratique du Congo.</p>
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
                                    <p>Gouverneur du Haut-Katanga (mai 2019),élu Député national et provincial de Likasi(déc 2018),chef de travaux et doctorant à l'Université de Lubumbashi</p>
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
                                    <p>
                                        @MagicSystemoffi
                                        @FondationMS
                                        @Gaouproductions
                                        @FEMUAOfficiel
                                        #UEMagicTour
                                    </p>

                                </div>
                            </div>
                            <div>
                                <Buttons name='Follow' btnBg='btn-follow' />
                            </div>
                        </div>
                        <div className='more'>
                            <Squid title='Show more' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}