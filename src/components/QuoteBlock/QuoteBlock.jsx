import React from 'react';
import styles from './QuoteBlock.module.css';

const QuoteBlock = ({image, author, position, children, classname, styles: customStyles}) => {
    return (
        <div className={`${styles.quote_block} ${classname}`} style={customStyles}>
            <div className={`${styles.quote_italic}`}>
                {children}
            </div>
            <div className={`${styles.quote_author} mt16`}>
                {author ? (
                    <>
                        <img src={`/images/${image}`} alt={`author ${author}`}/>
                        <div className={`${styles.quote_author_info}`}>
                            <h6 className={`${styles.quote_author_name}`}>{author}</h6>
                            <div className={`${styles.page_subtitle}`}>{position}</div>
                        </div>
                    </>
                ) : (
                    <h6>{position}</h6>
                )}

            </div>

            <img className={`${styles.openQuote}`} src="/images/quote_persona_health_app.svg" alt=""/>
        </div>
    );
};

export default QuoteBlock