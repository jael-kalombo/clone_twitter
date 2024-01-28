export default function IconeTweet(props) {

    return (
        <>
            <div id="icones1"  >
                <img src="assets/Media.svg" alt="" className= {`div ${props.name}`}/>
                <img src="assets/Gif.svg" alt=""className= {`div ${props.name}`} />
                <img src="assets/Poll.svg" alt=""className= {`div ${props.name}`} />
                <img src="assets/Emoji.svg" alt=""className= {`div ${props.name}`} />
                <img src="assets/Schedule.svg" alt=""className= {`div ${props.name}`} />
            </div>
        </>
    )
}