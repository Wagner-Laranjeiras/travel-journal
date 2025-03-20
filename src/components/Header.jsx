import globeImg from "../images/globe.png"

export default function Header() {
    return (
        <header 
            className="
            bg-red-500
            rounded-t-3xl
            mx-6
            mt-6
            min-w-xs
            flex
            items-center
            justify-center
            gap-2
            text-white p-4
            font-semibold
            text-2xl
        ">
            <img src={globeImg} alt="globe icon" className="w-14"/>
            <h1>My travel journal</h1>
        </header>
    )
}