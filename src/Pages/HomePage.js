import { Fragment } from 'react'
import DisplayCard from '../components/DisplayCard'

import allBeersPic from '../assets/beers.png'
import newBeerPic from '../assets/new-beer.png'
import randomBeerPic from '../assets/random-beer.png'

export default function HomePage () {
    return (
        <Fragment>
        <DisplayCard
            link="/beers"
            picture={allBeersPic}
            alt="a nice selection of beers"
            title="All Beers"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in sint nostrum, ipsum aut ducimus ea esse fuga hic tempore, dolore, magni mollitia fugiat quae asperiores facere culpa quia odio!
        </DisplayCard>
        <DisplayCard
            link="/random-beer"
            picture={randomBeerPic}
            alt="some beer taps without label"
            title="Random Beer"
        >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, qui. Explicabo, ipsum laborum doloribus expedita debitis vel natus, porro minus reprehenderit maxime, consectetur ut sunt vitae non id iure. Earum?
        </DisplayCard>
        <DisplayCard
            link="/new-beer"
            picture={newBeerPic}
            alt="a nice beer botle and a full glass"
            title="New Beer"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quam inventore ipsa, enim velit sed nostrum recusandae accusantium eos nobis cum voluptatem autem illum ipsum blanditiis et sit reprehenderit consectetur.
        </DisplayCard>
        </Fragment>
    )
}