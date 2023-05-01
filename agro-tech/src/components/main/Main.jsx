import './main.css'

export default function Main() {
    return (
        <main className='main__container'>
            <div className={'main__carousal'} style={{ backgroundImage: "url('/images/carousel/banner.jpg')" }}>
                <div className="main__background">
                    <div className='aboutAndImage'>
                        <p className='main__aboutUs'>About Us</p>
                        <p className="main__aboutDetail">
                            We are developing one stop solution for all the needs of farmer in a simple and Resilient way.
                            <br />
                            Through our innovative techniques.
                        </p>
                    </div>
                </div>
            </div>
            <h1 style={{ textAlign: 'center', marginTop: '1em' }}>Developing solution for farmers</h1>
            <div className="main__tiles"
                style={{ backgroundImage: `url('/images/carousel/6.jpg')` }}
            >
                <div className="main__tileContainer">
                    <div>Top of page <strong>{`->`}</strong></div>
                    <div
                        className='main__tilesImg'
                        style={{ backgroundImage: "url('/images/carousel/tiles1.jpg')" }}
                    >
                        <a
                            className='main__tileLink vert-move'
                            href="http://localhost:3000/">Home
                        </a>
                        <div className="main__tileClickMe vert-move">
                            <span>↑</span>
                            <br />
                            <span>Click me</span>
                        </div>
                    </div>
                </div>
                <div className="main__tileContainer">
                    <div>To know About Us  <strong>{`->`}</strong></div>
                    <div
                        className='main__tilesImg'
                        style={{ backgroundImage: "url('/images/carousel/4.jpg')" }}
                    >
                        <a
                            className='main__tileLink vert-move'
                            href="http://localhost:3000/about">About
                        </a>
                        <div className="main__tileClickMe vert-move">
                            <span>↑</span>
                            <br />
                            <span>Click me</span>
                        </div>
                    </div>
                </div>
                <div className="main__tileContainer">
                    <div>To get our Services <strong>{`->`}</strong></div>
                    <div
                        className='main__tilesImg'
                        style={{ backgroundImage: "url('/images/carousel/5.jpg')" }}
                    >
                        <a
                            className='main__tileLink vert-move'
                            href="http://localhost:3000/service">Service
                        </a>
                        <div className="main__tileClickMe vert-move">
                            <span>↑</span>
                            <br />
                            <span>Click me</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}