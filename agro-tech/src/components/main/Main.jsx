import Carousel from '../carousel/ImageSlider'
import carousalImages from '../carousel/images'
import './main.css'

export default function Main() {
    return (
        <main className='main-container'>
            <div>
                <Carousel images={carousalImages} />
            </div>
            <div className='aboutAndImage'>
                <div className='about-container'>
                    <h1 style={{ textDecoration: 'underline', marginLeft: '2%' }}>About</h1>
                    <p className='about'>
                        <div className='about-details'>
                            Repellendus dignissimos nesciunt explicabo, commodi tenetur unde dolorum saepe quae odio, veritatis officiis corrupti? Voluptatibus suscipit beatae nihil hic harum voluptatem alias. Fugit repellendus sequi praesentium temporibus saepe ea hic?
                            Repellendus perspiciatis, corrupti atque error numquam itaque quasi commodi alias voluptatem id soluta, delectus natus impedit tempore? Magnam possimus pariatur amet ipsum impedit ab beatae fuga, soluta dicta consectetur nesciunt!
                            Sint minus veritatis minima, nesciunt maxime harum ducimus quibusdam blanditiis. Adipisci, molestiae. Ipsa, consequuntur accusamus labore rerum cumque modi illum repellendus repudiandae eligendi, ratione iure eos tempora ab dolores laborum.
                            Vitae assumenda magni odio deleniti rem voluptas ad autem sequi explicabo iure ipsa eveniet natus sapiente inventore ut, facere dolorum. Quia voluptatibus, quae eos modi ratione ipsa perferendis explicabo harum!
                            Molestias, aperiam alias reiciendis qui accusamus rerum et dignissimos quibusdam ducimus, exercitationem quas, maiores ullam voluptatibus. Dolorum voluptatum iure ullam quidem quis, veritatis vel odio mollitia! Nisi eveniet necessitatibus asperiores!
                            Non porro odit aperiam. Mollitia sunt natus, officiis, placeat esse qui iste consectetur, ratione eligendi repellat culpa? Dignissimos at architecto natus. Tempora dicta quos aliquid architecto recusandae necessitatibus explicabo doloribus.
                            Perferendis eveniet quibusdam impedit corporis labore? Libero, magni veniam facere quos quam non unde iusto mollitia aperiam quae vel a labore at. Rerum quod voluptas asperiores recusandae ad laborum iste!
                            Eveniet deleniti numquam laboriosam incidunt fugiat iusto sequi eligendi quam! Quos obcaecati ducimus ullam ipsa deleniti facere fuga? Voluptatibus, ab ex? Debitis magnam quaerat eveniet neque necessitatibus modi hic placeat.
                            Rem odit at repellat doloribus impedit aliquid deserunt placeat molestias fugit dolore aliquam saepe harum earum nobis blanditiis voluptas dolor incidunt, officiis temporibus. Beatae perferendis laborum distinctio soluta accusamus quasi!
                            Nemo explicabo voluptate hic incidunt sed nobis architecto aliquid recusandae corrupti consequatur saepe sunt repellendus adipisci sint, tenetur, doloremque vero veniam assumenda! Porro exercitationem repudiandae quia facere animi, nam reiciendis.
                            Placeat magnam recusandae eveniet porro, delectus perspiciatis ipsa iste qui dolores minima, vero eligendi. Quisquam, dolores recusandae tempora dolor iure quibusdam numquam perspiciatis at corporis minus reprehenderit sapiente accusantium laborum.
                            Ipsam deleniti optio provident saepe accusamus, incidunt et assumenda quisquam quaerat dolorem unde veritatis vero sapiente nulla. Eaque adipisci veniam, corrupti voluptatum temporibus debitis deserunt itaque beatae veritatis ipsa praesentium?
                            Delectus porro esse blanditiis unde incidunt tempora perferendis nulla repudiandae deleniti ipsam tenetur impedit, ea adipisci dolores necessitatibus officia repellat neque quaerat placeat! Quisquam vel possimus nobis nulla voluptates reiciendis.
                            Voluptas accusamus tempore itaque. Quaerat dolores perferendis eaque animi nemo dolore, explicabo rerum facilis quibusdam ipsam itaque rem impedit nihil fugit reprehenderit, autem sint. Dolore eaque iste porro nostrum cupiditate?
                        </div>
                    </p>
                </div>
                <div className='about-image-container'>
                    <img className='about-image' src="/images/carousel/1.jpg" alt="image" />
                </div>
            </div>
        </main>
    )
}