import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilImage from './ProfilImage'
import IconeTweet from './IconeTweet'
import Buttons from './Button'


function App() {

  return (
    <>
      <div className='container_centrale'>
        <div className='menu'>
          <div className='sousMenu1'>
            <ProfilImage src='assets/Twitter.svg' />
          </div>
          <div className='sousMenu2'>
            <ProfilImage src='assets/Vector.svg' />
            <label htmlFor="">Home</label>
            <ProfilImage src='assets/Vector.svg' />
            <label htmlFor="">Home</label>
            <ProfilImage src='assets/Vector.svg' />
            <label htmlFor="">Home</label>
            <ProfilImage src='assets/Vector.svg' />
            <label htmlFor="">Home</label>
            <ProfilImage src='assets/Vector.svg' />
            <label htmlFor="">Home</label>
            <ProfilImage src='assets/Vector.svg' />
            <label htmlFor="">Home</label>
            <ProfilImage src='assets/Vector.svg' />
            <label htmlFor="">Home</label>
            <ProfilImage src='assets/Vector.svg' />
            <label htmlFor="">Home</label>
          </div>
        </div>
        <div className='page_twitter'>
          <div className='container1'>
            <h1 id='title'>Home</h1>
            <div id='imageTimeline' ><img src="assets/Timeline-Prop.svg" alt="" className='timeline' /></div>
          </div>
          <div className='container2'>
            <div className='sousContainer1'>
              <ProfilImage src="assets/Profile-Photo.svg"></ProfilImage>
              <input type="text" placeholder='What´s happening ' />
            </div>
            <div className='sousContainer2'>
              <IconeTweet />
              <Buttons name="Tweet" btnBg="btn-blue" />
            </div>
          </div>
        </div>
        <div className='liste_twitter'>

        </div>
      </div >
    </>
  )
}
export default App
