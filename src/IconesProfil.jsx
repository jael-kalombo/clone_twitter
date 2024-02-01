import { useState } from "react";
import Follow from "./Follow";
import ProfilImage from "./ProfilImage";
import Squid from "./Squid";

export default function IconesProfil () {
    const[change,setChange]=useState(false)
    const[over,setOver]=useState(false)

    return(
        <>
        <div className="container4">
            <div>
                <ProfilImage src='assets/image 1 (1).png'/>
            </div>
            <div className="class_central">
                <div className="userTweet">
                    <Squid title='CNN' />
                    <ProfilImage src='assets/Verified.svg' />
                    <Follow title='@nytimes.' />
                    <Follow title='2h' />
                </div>
                <div className="top_image">
                    <Squid title='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' />
                </div>
                <div className="assets_image"> 
                    <ProfilImage src='assets/image 3.png' />
                </div>
                <div className="flex" onClick={()=> (setChange(!change))} onMouseOver={() =>(setOver(true)) } onMouseOut={()=>(setOver(false)) }>
                    <div className="iconeFlex">
                        {
                            over==false ? <ProfilImage src='assets/Reply.svg' />:<ProfilImage src='assets/Reply 2.svg' />
                    }
                     
                        <Follow title='0'class='flex_class' />
                    </div>
                    <div className="iconeFlex">
                        <ProfilImage src='assets/Retweet.svg' />
                        <Follow title='0'class='flex_class' />
                    </div>
                    <div className="iconeFlex">{
                        over==true ? <ProfilImage src='assets/React 2.svg' />:(change==false ? <ProfilImage src='assets/React.svg' /> :<ProfilImage src='assets/React 3.svg' /> )
                    }
                        
                        <Follow title='0'class='flex_class' />
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