import type { Surah } from "../../types/surah";
import SurahCard from "./SurahCard";


type SurahlistProps ={
    Surahs: Surah[];
};

function SurahList({Surahs}: SurahlistProps) {
    return (
        <div className="flex flex-col gap-3 p-5">
            {Surahs.map((surah) => (
                <SurahCard key={surah.nomor} surah={surah}/>
            ))}
        </div>
    );
}

export default SurahList;