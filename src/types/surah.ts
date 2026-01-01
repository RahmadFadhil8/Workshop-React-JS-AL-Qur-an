type Ayat = {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: Record<string, string>;
};

type Tafsiran = {
  ayat: number;
  teks : string;
};

type RelatedSurah = {
  nomor: number;
  namaLatin: string;
};

type Surah = {
  nomor: number;
  nama: string;
  namaLatin: string;
  arti: string;
  tempatTurun: string;
  jumlahAyat: number;
  deskripsi: string;
  audioFull: Record<string, string>;
  ayat: Ayat[];
  prevSurah: RelatedSurah | null;
  nextSurah: RelatedSurah | null;
};

type Tafsir = {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: Record<string, string>;
  tafsir: Tafsiran[];
  prevSurah: RelatedSurah | null;
  nextSurah: RelatedSurah | null;
};

export type { Ayat, Surah, RelatedSurah, Tafsir, Tafsiran };
