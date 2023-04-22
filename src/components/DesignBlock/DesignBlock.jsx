import './DesignBlock.css'

const DesignBlock = ({info, reverse, shadows = true}) => {
    return (
        <div className={`pages_block mt180 ${reverse % 2 === 0 ? 'reversed' : ''}`}>
            <div className="page_text">
                <h3 className="page_title">{info.title}</h3>
                <div className="page_subtitle mt24">{info.subtitle}</div>
            </div>
            <img className={shadows === true ? 'image_shadow' : ''} src={`/images/${info.image_url}`}
                 alt={info.image_url.split(".")[0]}/>
        </div>
    )
}

export default DesignBlock