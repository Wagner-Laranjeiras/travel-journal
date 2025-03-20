import marker from "../images/marker.png"

export default function Entry( props ) {
    return (
        <article 
            className="
            p-6
            mx-auto
            flex
            gap-2
            items-center
            w-1/2
            min-w-xl">
            <img src={props.entry.img.src} alt={props.entry.img.alt} 
                className="
                rounded-lg
                w-52
                h-68
                object-cover
            "/>
            <div className="ml-4">
                <div className="flex gap-1.5 mb-2 items-center">
                    <img src={marker} alt="Pin Marker" className="w-3 h-4" />
                    <span className="uppercase tracking-wider">{props.entry.country}</span>
                    <a href={props.entry.googleMapsLink} className="underline text-gray-500 ml-4">View on Google Maps</a>
                </div>
                <h2 className="font-bold text-4xl mb-6">{props.entry.title}</h2>
                <span className="font-bold">{props.entry.dates}</span>
                <p className="mt-2">{props.entry.text}</p>
            </div> 
        </article>
    )
}