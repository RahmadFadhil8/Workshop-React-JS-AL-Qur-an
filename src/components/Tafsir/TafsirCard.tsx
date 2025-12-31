import type { Tafsiran } from "../../types/surah"
import Number from "../Number"

type TafsirCardProps = {
    tafsir : Tafsiran
}

function TafsirCard({tafsir}: TafsirCardProps) {
    return (
        <div className="bg-dark p-4 rounded-lg text-light text-left flex flex-col gap-4">
            <div className="flex justify-between gap-4">
                <Number nomor={tafsir.nomorTafsir}/>
                <p className="font-bold text-2xl text-right w-full">{tafsir.teksTafsir}</p>
            </div>
        </div>
    )
}

export default TafsirCard