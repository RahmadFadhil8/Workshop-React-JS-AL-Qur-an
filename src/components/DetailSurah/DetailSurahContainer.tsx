import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import type { Surah } from "../../types/surah";
import DetailSurah from "./DetailSurah";

function DetailSurahContainer() {
    const { surahId } = useParams<{ surahId: string }>();
    const [loading, setLoading] = useState(true);
    const [surah, setSurah] = useState<Surah | null>(null);
    const [msgError, setMsgError] = useState<string | null>(null);
    const [currentReciter, setCurrentReciter] = useState("01");
    const [audioPlaying, setAudioPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    
    useEffect(() => {
        const fetchSurah = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://equran.id/api/v2/surat/${surahId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch surah data");
                }
                const data = await response.json();
                setSurah(data.data);
            } catch (err) {
                setMsgError(err instanceof Error ? err.message : "Unknown error occured");
            } finally {
                setLoading(false);
            }
        };

        fetchSurah();
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
        if(!surah) return;
        if(audioRef.current) {
            audioRef.current.pause();
        }
        audioRef.current = new Audio(surah.audioFull[currentReciter]);
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

    if (msgError || !surah) {
    return (
        <div className="p-5 text-center text-red-500">
            Error: {msgError || "Surah tidak ditemukan"}
        </div>
    );
    }

    return (
        <DetailSurah surah={surah} audioPlaying={audioPlaying} changeReciter={changeReciter} currentReciter={currentReciter} onPause={handlePauseAudio} onPlay={handlePlayFullSurah}/>
    )
}

export default DetailSurahContainer
