import { Link, useParams } from "react-router-dom"
import DetailTafsirContainer from "../components/DetailTafsir/DetailTafsirContainer"

function DetailTafsirPage () {
    const { surahId } = useParams();
    return (
        <>
            <div className="pt-8">
                <Link to= {`/surah/${surahId}`} className="text-light">
                    ← Detail Surah
                </Link>
            </div>
            <DetailTafsirContainer />
        </>
    )
}

export default DetailTafsirPage