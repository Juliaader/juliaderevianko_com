import React from 'react';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className={'center'}>
            <div>
                <img src="/images/404error.png" alt=""/>
                <h3>A problem occurred </h3>
                <div className="text_paragraph">Your request could not be completed. Please, check you internet
                    connection.
                </div>
            </div>
        </div>

    );
};

export default NotFoundPage