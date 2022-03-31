interface PhysiotherapistDetailItem5 {
    type:'abhi' | 'mobile';
}
export default function TopUpItem2(props:PhysiotherapistDetailItem5) {
    const{type} = props;
    if(type ==='abhi'){
        return(
            <div className="pb-50 d-md-block d-none">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">Abhijana</h2>
            <p className="text-lg color-palette-2 mb-0">Physiotherapist</p>
        </div>
        )
    }
    return (
        <div className="row align-items-center">
        <div className="col-md-12 col-4">
            <img src="/img/Thumbnail-10.png" width="280" height="380" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-12 col-8 d-md-none d-block">
            <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">Physiotherapist:<br/>
                The New Battle 2021</h2>
            <p className="text-sm color-palette-2 text-start mb-0">Category: bukan om rama</p>
        </div>
    </div>
    )
}
