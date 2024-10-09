import "./style.css"

const MusicPageMenu=({changeHandele})=>{
    return(
        <>
            <div className="item-music">
                <span onClick={changeHandele} className="head-title-music">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <p>Main Menu</p>
                </span>
                <ul>
                    <h2>Stream Music</h2>
                    <li>Amazon Music Unlimited</li>
                    <li>Free Streaming Music</li>
                    <li>Podcasts</li>
                    <li>Open Web Player</li>
                    <li>Download the app</li>
                </ul>
            </div>
        </>
    )
}
export default MusicPageMenu