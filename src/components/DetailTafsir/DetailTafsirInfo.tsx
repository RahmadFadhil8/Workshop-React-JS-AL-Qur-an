import type { Tafsir } from "../../types/surah"

type DetailTafsirInfoProps ={
    tafsir: Tafsir;
};

function DetailTafsirInfo({tafsir}: DetailTafsirInfoProps) {
    return (
        <div className="bg-[url('/src/assets/AyatBackgroundImage.png')] relative  bg-cover bg-no-repeat py-5 px-4 rounded-2xl text-light text-left">
            <div className="mb-8 flex flex-col gap-2">
                <p className="font-bold text-2xl">{tafsir.namaLatin}</p>
                <p className="font-light text-sm">{tafsir.arti}</p>
                <hr className="opacity-10" />
                <p className="font-semibold text-sm">
                    {tafsir.tempatTurun} . {tafsir.jumlahAyat} Ayat
                </p>
            </div>
        </div>
    )
};

export default DetailTafsirInfo