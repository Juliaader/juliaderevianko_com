import React, {useRef, useState} from "react"
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";
import SocialLinks from "../../components/SocialLinks/SocialLinks";


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slider_settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        swipeToSlide: true,
        afterChange: (current) => {
            setCurrentSlide(current)
        }
    };

    let slider = useRef();

    const slides = [
        {
            header_title: "Guide",
            header_subtitle: "Learning Management System",
            img: "home_page_slide2.png",
            project_name: 'Guide',
            project_type: 'Web App',
            href: '/work/guide'
        }, {
            header_title: "Caresimple",
            header_subtitle: "Health Care App",
            img: "home_page_slide_2.png",
            project_name: 'Caresimple',
            project_type: 'Mobile App',
            href: '/work/health_app'
        }, {
            header_title: "Medstroke",
            header_subtitle: "Mobile Stroke Unit",
            img: "home_page_slide3.png",
            project_name: 'Medstroke',
            project_type: 'Mobile Stroke Unit',
            href: '/work/mobile_stroke_unit'
        }
    ]


    return (
        <div className='container'>
            <div className="home_block_outer">
                <div className="home_block">
                    <div className="header_block_name">
                        <h1>Julia<br/>Derevianko</h1>
                    </div>
                    <div className="guide_block_desktop">
                        <div className="guide_block_title">
                            {slides[currentSlide].project_name}:
                        </div>
                        <div className="guide_block_content">
                            {slides[currentSlide].project_type}
                        </div>
                    </div>

                </div>

                <div className="slider_block_outer">
                    <div className="slide_block">
                        <div className="slider_block_column flex">
                            <div className="slider_block_row">
                                <div className="home_emoji">

                                    <div className="home_emoji_container">
                                        <img src="/images/icons/backhand_index_pointing_down.svg"
                                             alt="pointer_down_ico"/>
                                        <img src="/images/icons/smiling_face_and_eyes_calling.svg"
                                             alt="smiling_face_ico"/>
                                        <img src="/images/icons/waving_hand.svg" alt="waving_hand_ico"/>
                                        <img src="/images/icons/hugging_face.svg" alt="hugging_face_ico"/>
                                        <img src="/images/icons/smiling_face_with_smiling_eyes.svg"
                                             alt="smiling_face_with_smiling_eyes_ico"/>
                                    </div>
                                </div>
                                <div className="slide_block_text">
                                    Hello there! I’m a passionate Google certified UX designer. Being passionate means
                                    facing challenges head-on with imagination and creativity. Being passionate also
                                    means loving what you do, and doing what you love: I passionately do both!
                                </div>
                            </div>
                            <div className="slider_block_row slider_block_controls">
                                <div onClick={() => slider.slickPrev()}>

                                    <svg width="58" height="58" viewBox="0 0 58 58" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="29" cy="29" r="28" stroke="#94A8B8" strokeWidth="2"/>
                                        <path
                                            d="M26 29L25.2929 28.2929L24.5858 29L25.2929 29.7071L26 29ZM31.2929 22.2929L25.2929 28.2929L26.7071 29.7071L32.7071 23.7071L31.2929 22.2929ZM25.2929 29.7071L31.2929 35.7071L32.7071 34.2929L26.7071 28.2929L25.2929 29.7071Z"
                                            fill="#94A8B8"/>
                                    </svg>

                                </div>
                                <div onClick={() => slider.slickNext()}>

                                    <svg width="58" height="58" viewBox="0 0 58 58" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="29" cy="29" r="28" stroke="#94A8B8" strokeWidth="2"/>
                                        <path
                                            d="M32 29L32.7071 28.2929L33.4142 29L32.7071 29.7071L32 29ZM26.7071 22.2929L32.7071 28.2929L31.2929 29.7071L25.2929 23.7071L26.7071 22.2929ZM32.7071 29.7071L26.7071 35.7071L25.2929 34.2929L31.2929 28.2929L32.7071 29.7071Z"
                                            fill="#94A8B8"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className="slider_block_column">
                            <div className="guide_block_mobile">
                                <div className="guide_block_title">
                                    {slides[currentSlide].project_name}
                                </div>
                                <div className="guide_block_content">
                                    {slides[currentSlide].project_type}
                                </div>
                            </div>
                            <Slider {...slider_settings} ref={c => (slider = c)} className='slider'>
                                {slides.map(elem => (
                                    <NavLink to={elem.href} className='slider_link'>
                                        <div className='slide'>
                                            <div className="slide_title_block">
                                                <div className="slide_title">{elem.header_title}</div>
                                                <div className="slide_subtitle">{elem.header_subtitle}</div>
                                            </div>
                                            <img src={`/images/${elem.img}`} alt={elem.header_title}/>
                                        </div>
                                    </NavLink>
                                ))}

                            </Slider>
                        </div>

                    </div>
                </div>

                <SocialLinks/>
            </div>

        </div>
    )
}

export default Home