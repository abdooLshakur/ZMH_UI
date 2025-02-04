import spotlightIMG from '../ZMH Images/spotlight.jpg';

function Spotlight() {
    return (
        <div className='spotlight-wrapper'>
            <div className='spotlight'>
                <div style={{
                    backgroundImage: `url(${spotlightIMG})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`,
                    height: `500px`,
                    width: `100%`,
                }}>
                    <div className='spotlight-txt'>
                        <span>New Collections</span>
                        <h1>Awesome Bag Kit Gift Sets</h1>
                        <p>Find your unique style</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div className='spotlight'>
                <div style={{
                    backgroundImage: `url(${spotlightIMG})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`,
                    height: `500px`,
                    width: `100%`,
                }}>
                    <div className='spotlight-txt'>
                        <span>New Collections</span>
                        <h1>Awesome Bag Kit Gift Sets</h1>
                        <p>Find your unique style</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spotlight;