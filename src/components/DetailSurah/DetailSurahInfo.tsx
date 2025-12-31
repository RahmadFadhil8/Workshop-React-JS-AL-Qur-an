import { Link } from "react-router-dom";
import ChevronRight from "../../assets/ChevronRightIcon.svg"
import type { Surah } from "../../types/surah";

type DetailSurahInfoProps = {
    surah: Surah;
};

function DetailSurahInfo ({ surah } : DetailSurahInfoProps) {
    return (
        <div className="bg-[url('/src/assets/AyatBackgroundImage.png')] relative  bg-cover bg-no-repeat py-5 px-4 rounded-2xl text-light text-left">
            <div className="mb-8 flex flex-col gap-2">
                <p className="font-bold text-2xl">{surah.namaLatin}</p>
                <p className="font-light text-sm">{surah.arti}</p>
                <hr className="opacity-10" />
                <p className="font-semibold text-sm">
                    {surah.tempatTurun} . {surah.jumlahAyat} Ayat
                </p>
            </div>
            <div className="flex items-center justify-between bg-accent-light-purple px-3 py-1 absolute bottom-0 left-0 w-full rounded-b-2xl">
                <p>Tentang surah {surah.namaLatin}</p>
                <Link to={`/tafsir/${surah.nomor}`}>
                    <img src={ChevronRight} alt="Chevron Right" />
                </Link>
            </div>
        </div>
    )
};

export default DetailSurahInfo