import Photo from '../assets/Photo.png'
import Profile from "./Profile"
import Verse from "./verse"

function Hero() {
    return (
        <div className='relative'>
            <div className="absolute top-0 left-0 w-full bg-[url('/src/assets/HeroBackgroundImage.png')] bg-no-repeat bg-cover h-60 rounded-b-2xl"></div>
            <div className='relative z-10 px-5 pt-8 flex flex-col gap-8'>
                <Profile greeting="Good Evening" name="Rahmad Fadhil" avatar={Photo}/>
                <Verse surah="Al-A’raaf (7:25)" verse="“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).’”"/>
            </div>
        </div>
    )
}

export default Hero