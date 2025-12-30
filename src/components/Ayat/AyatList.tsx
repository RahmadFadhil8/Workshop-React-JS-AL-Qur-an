import type { Ayat } from "../../types/surah"
import AyatCard from "./AyatCard"

type AyatlistProps = {
    ayat : Ayat[]
}

function AyatList({ayat}: AyatlistProps) {
    return (
        <div className="flex flex-col gap-3">
            {ayat.map((item) => (
                <AyatCard key={item.nomorAyat} ayat={item}/>
            ))}
        </div>
    )
}

export default AyatList