import type { Surah } from "../../types/surah";
import Number from "../Number";

type SurahCardProps ={
    surah : Surah
}

function SurahCard({surah}: SurahCardProps) {
    return (
        <div className="bg-dark p-2">
            <Number nomor={surah.nomor}/>
            <div>
                <p>{surah.namaLatin}</p>
                <p>{surah.arti}</p>
                <p>{surah.tempatTurun} . {surah.jumlahAyat}</p>
            </div>
            <p>{surah.nama}</p>
        </div>
    )
}

export default SurahCard