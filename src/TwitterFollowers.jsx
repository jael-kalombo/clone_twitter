import ButtonRecherche from "./ButtonRecherche";
import Liste from "./Liste";
import Followlistes from "./FollowListes";

export default function TwitterFollowers () {
    return(
        <>
        <div className='liste_twitter'>
          <ButtonRecherche btnBg='button_search' />
          <Liste />
          <Followlistes />
        </div>
        </>
    )
}