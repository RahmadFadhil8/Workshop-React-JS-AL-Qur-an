import type { Tafsir } from "../../types/surah"
import AudioControl from "../AudioControl";
import TafsiranList from "../Tafsir/TafsirList";
import DetailTafsirInfo from "./DetailTafsirInfo";

type DetailTafsirProps = {
    tafsir : Tafsir;
    currentReciter : string;
    audioPlaying: boolean;
    changeReciter: (reciterId: string) => void;
    onPlay: () => void;
    onPause: () => void;
}

function DetailTafsir({tafsir, currentReciter,audioPlaying,changeReciter,onPause,onPlay}:DetailTafsirProps) {
    return (
        <div className="py-8 flex flex-col gap-5">
            <DetailTafsirInfo tafsir={tafsir}/>
            <AudioControl currentReciter={currentReciter} changeReciter={changeReciter} onPause={onPause} onPlay={onPlay} audioPlaying={audioPlaying}/>
            <TafsiranList tafsir={tafsir.tafsir} />
        </div>
    )
}

export default DetailTafsir