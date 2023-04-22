import './Footer.css'

const Footer = () => {
    return (
        <div className='footer container'>
            <div className="footer_copyright">© 2022 Julia Derevianko. All rights reserved.</div>
            <div className="footer_write_me">
                <div className="footer_write_me_text">
                    Drop me a mail with your thoughts.
                </div>
                <div className="footer_write_me_email">
                    <a href="mailto:juliader2014@gmail.com">juliader2014@gmail.com</a>
                </div>
            </div>

        </div>
    )
}

export default Footer