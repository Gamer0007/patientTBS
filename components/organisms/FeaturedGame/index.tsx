import PhysiotherapistProps1 from "../../molecules/PhysiotherapistProps1"
import PhysiotherapistProps2 from "../../molecules/PhysiotherapistProps2"
import PhysiotherapistDetail3 from "../../molecules/PhysiotherapistDetail3"
import PhysiotherapistDetail4 from "../../molecules/PhysiotherapistDetail4"
import PhysiotherapistDetail5 from "../../molecules/PhysiotherapistDetail5"
export default function FeaturedGame() {
    return (
        <section className="featured-game pt-50 pb-50">
    <div className="container-fluid" id="fisioterapi">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Physiotherapists<br/> 
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up">
            <PhysiotherapistProps1 title="Physiotherapist" category="Dr. Om Rama" thumbnail="/img/Thumbnail-6.png"/>
            <PhysiotherapistProps2 title="Physiotherapist" category="Dr. Arya " thumbnail="/img/Thumbnail-7.png"/>
            <PhysiotherapistDetail3 title="Physiotherapist" category="Dr. Alden " thumbnail="/img/Thumbnail-8.png"/>
            <PhysiotherapistDetail4 title="Physiotherapist" category="Dr. Aldo" thumbnail="/img/Thumbnail-9.png"/>
            <PhysiotherapistDetail5 title="Physiotherapist" category="Dr. Abhi" thumbnail="/img/Thumbnail-10.png"/>
            
        </div>
   
    </div>
</section>
    )
}
