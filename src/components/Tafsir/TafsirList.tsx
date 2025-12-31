import type { Tafsiran } from "../../types/surah"
import TafsirCard from "./TafsirCard"

type TafsirListProps = {
    tafsir : Tafsiran[]
}

function TafsiranList({tafsir}: TafsirListProps) {
    return (
        <div className="flex flex-col gap-3">
            {tafsir.map((item) => (
                <TafsirCard key={item.nomorTafsir} tafsir={item}/>
            ))}
        </div>
    )
}

export default TafsiranList