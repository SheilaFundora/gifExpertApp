import {GiftGridItem} from "./GiftGridItem";
import {useFetchGif} from "../hooks/useFetchGif";


export const GifGrid = ({categories}) => {

    const {data:images, loading} = useFetchGif(categories);
    // en data tenemos todo lo q nos devuelve el fetch, id, title, url

    return (
        <div>
            <h2 className='animate__animated animate__bounce category-center' >{categories}</h2>
            {loading && <p>loading...</p>}
            {/*mientras loading este en true pondra este sms hasta q se carge y se ponga en false */}
            <div className="card-grid">
                {
                    images.map( img => (
                        <GiftGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </div>
    );
};




