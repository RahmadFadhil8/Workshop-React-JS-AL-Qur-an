import { useParams } from "react-router-dom";
import DetailTafsir from "./DetailTafsir";
import { useEffect, useRef, useState } from "react";
import type { Tafsir } from "../../types/surah";

function DetailTafsirContainer() {
    const { surahId } = useParams<{ surahId: string}> ();
    const [loading, setLoading] = useState(true);
    const [tafsir, setTafsir] = useState<Tafsir | null>(null);
    const [msgError, setMsgError] = useState<string | null>(null);
    const [currentReciter, setCurrentReciter] = useState("01");
    const [audioPlaying, setAudioPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const fecthTafsir = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://equran.id/api/v2/tafsir/${surahId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch tafsir data");
                }
                const data = await response.json();
                setTafsir(data.data);
                console.log(data.data);
            } catch (err) {
                setMsgError(err instanceof Error ? err.message : "Unknown error occured");
            } finally {
                setLoading(false);
            }
        };
        fecthTafsir();
    }, [surahId]);

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src="";
            }
        };
    }, []);

    const changeReciter = (reciterId: string) => {
        setCurrentReciter(reciterId);
        if (audioPlaying) {
            handlePauseAudio();
            setTimeout(() => {
            handlePlayFullSurah();
            }, 100);
        }
    };

    const handlePlayFullSurah = () => {
        if(!tafsir) return;
        if(audioRef.current) {
            audioRef.current.pause();
        }
        audioRef.current = new Audio(tafsir.audioFull[currentReciter]);
        audioRef.current.onended = () => {
            setAudioPlaying(false);
        };

        audioRef.current.play();
        setAudioPlaying(true);
    }

    const handlePauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setAudioPlaying(false);
    }

    if (loading) {
        return <div className="p-5 text-center">Memuat...</div>;
    }

    if (msgError || !tafsir) {
        return (
            <div className="p-5 text-center text-red-500">
                Error: {msgError || "Surah tidak ditemukan"}
            </div>
        );
    }
    
    return (
        <DetailTafsir tafsir={tafsir} audioPlaying={audioPlaying} changeReciter={changeReciter} currentReciter={currentReciter} onPause={handlePauseAudio} onPlay={handlePlayFullSurah} />
    )
}

export default DetailTafsirContainer