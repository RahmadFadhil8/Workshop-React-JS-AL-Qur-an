import type { Surah } from "../../types/surah"
import AudioControl from "../AudioControl";
import AyatList from "../Ayat/AyatList";
import DetailSurahInfo from "./DetailSurahInfo";

type DetailSurahProps = {
    surah : Surah;
    currentReciter : string;
    audioPlaying: boolean;
    changeReciter: (reciterId: string) => void;
    onPlay: () => void;
    onPause: () => void;
}

function DetailSurah ({surah, currentReciter, audioPlaying, changeReciter, onPlay, onPause} : DetailSurahProps) {
    return (
        <div className="py-8 px-5 flex flex-col gap-5">
            <DetailSurahInfo surah={surah} />
            <AudioControl currentReciter={currentReciter} changeReciter={changeReciter} onPause={onPause} onPlay={onPlay} audioPlaying={audioPlaying}/>
            <AyatList ayat={surah.ayat}/>
        </div>
    )
}

export default DetailSurah