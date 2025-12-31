import { Link } from "react-router-dom"

function DetailTafsirPage () {
    return (
        <>
            <div className="pt-8">
                <Link to="/" className="text-light">
                    ← Detail Surah
                </Link>
            </div>
            {/* <DetailSurahContainer /> */}
        </>
    )
}

export default DetailTafsirPage