import Image from "next/image";
import Link from "next/link";
export interface PhysiotherapistProps4{
    title: string;
    category:string;
    thumbnail:'/img/Thumbnail-6.png'|'/img/Thumbnail-7.png'
    |'/img/Thumbnail-8.png'|'/img/Thumbnail-9.png'|'/img/Thumbnail-10.png'
    |'/img/Thumbnail-11.png'|'/img/Thumbnail-12.png'|'/img/Thumbnail-13.png'|'/img/Thumbnail-14.png';
    id: string;
}
export default function PhysiotherapistDetail4(props:PhysiotherapistProps4) {
    const{title,category,thumbnail, id}= props;
    return (
        <div className="featured-game-card position-relative">
        <Link href={`/detail4`}>
            <a >
            <div className="blur-sharp">
                <img className="thumbnail" src={thumbnail} width={205} height={270} alt=""/>
            </div>
            <div className="cover position-absolute bottom-0 m-32">
                <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                     <img  src="/icon/icons8-doctor-64.png" width={54} height ={56} alt="console"/>
                    </div>
                    <div>
                        <p className="fw-semibold text-white text-xl m-0">{title}</p>
                        <p className="fw-light text-white m-0">{category}</p>
                    </div>
                </div>
            </div>
        </a>
        </Link>
       

    </div>
    )
}
