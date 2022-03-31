interface PhysiotherapistDetailItem4 {
    type:'aldo' | 'mobile';
}
export default function TopUpItem2(props:PhysiotherapistDetailItem4) {
    const{type} = props;
    if(type ==='aldo'){
        return(
            <div className="pb-50 d-md-block d-none">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">Aldo Pratama</h2>
            <p className="text-lg color-palette-2 mb-0">Physiotherapist</p>
        </div>
        )
    }
    return (
        <div className="row align-items-center">
        <div className="col-md-12 col-4">
            <img src="/img/Thumbnail-9.png" width="280" height="380" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-12 col-8 d-md-none d-block">
            <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">Physiotherapist:<br/>
                The New Battle 2021</h2>
            <p className="text-sm color-palette-2 text-start mb-0">Category: bukan om rama</p>
        </div>
    </div>
    )
}
