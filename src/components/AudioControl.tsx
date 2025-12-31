import Play from "../assets/Play.svg";
import Pause from "../assets/Pause.svg";



type AudioControlProps = {
    currentReciter: string;
    audioPlaying: boolean;
    changeReciter: (reciterId: string) => void;
    onPlay: () => void;
    onPause: () => void;
}

function AudioControl({currentReciter, audioPlaying, changeReciter, onPlay, onPause} : AudioControlProps) {
    const reciters = [
        { id: "01", name: "Abdullah Al-Juhany" },
        { id: "02", name: "Abdul Muhsin Al-Qasim" },
        { id: "03", name: "Abdurrahman as-Sudais" },
        { id: "04", name: "Ibrahim Al-Dossari" },
        { id: "05", name: "Misyari Rasyid Al-Afasi" },
    ];

    return (
        <div className="flex justify-between gap-4 items-center">
            <select value={currentReciter} onChange={(e) => changeReciter(e.target.value)} className="bg-dark text-light p-3 w-full rounded-lg">
                {reciters.map((reciter) => (
                    <option value={reciter.id} key={reciter.id}>{reciter.name}</option>
                ))}
            </select>

            <div className="bg-primary w-8 h-8 rounded-full flex flex-col justify-center items-center cursor-pointer" onClick={audioPlaying? onPause : onPlay}>
                {audioPlaying ? (
                    <img src={Play} alt="Play Icon" className="w-fit h-fit"/>
                ) : (
                    <img src={Pause} alt="Pause Icon" className="w-fit h-fit"/>
                )}
            </div>
        </div>
    );
}

export default AudioControl;