import type { Surah } from "../../types/surah";
import { useState, useEffect } from "react";
import SurahList from "./SurahList";

function SurahContainer () {
    const [Surahs, setsurahs] = useState<Surah[]>([]);
    const [isLoading, setIsloading] = useState(true);
    const [msgError, setMsgError] = useState<string | null>(null);

    useEffect(() =>{
        const fetchSurahs = async() => {
            try {
                const response = await fetch("https://equran.id/api/v2/surat");
                if (!response.ok) {
                    throw new Error("Failed to fetch surahs"); 
                }
                const data = await response.json();
                setsurahs(data.data);
                setIsloading(false);
            } catch (msgError) {
                setMsgError(msgError instanceof Error ? msgError.message : "Unknown error");
                setIsloading(false);
            }
        };
        fetchSurahs();
    }, []);

    if (isLoading) {
        return <p>Loading.....</p>;
    }

    if (msgError) {
        return <p>{msgError}</p>;
    }

    return <SurahList Surahs={Surahs} />;
};

export default SurahContainer;