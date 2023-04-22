import './GuideWork.css'
import Slider from "react-slick";
import React, {useRef, useState} from "react";
import DesignBlock from "../../components/DesignBlock/DesignBlock";

const table_rows = [
    ['Geographic', 'Global all English, Russian and Spanish speakers', 'Global all English, Russian and Spanish speakers', 'Global all English, Russian and Spanish speakers'],
    ['Demographic', '18-45 (young adults, adults)', '25-65 (adults)', '28-50 (adults with a high - income job)'],
    [
        'Economic',
        'These people have money for training and they want to spend it but they are unsure about which course to choose.',
        'They are experiencing a lack of money because they have already invested in courses and in order to find employment realise they need further education in their chosen field.',
        'They are professionals in their field, but sometimes they lack knowledge in certain area of the field.'
    ],
    [
        'Psychological',
        'They want to change their lives. They want to go on courses but want these courses to be verified so that they acquire valid certification to find employment. They are uncertain about where to find these courses.',
        'Desperately want to be identified as a professional in their field for the sake of their egos.  They however lack the knowledge to be identified as such.  They’re ambitious, but also enjoy life.',
        'Want to position themselves as an expert in their field. Individuals who happen to be dangerously competitive. Won’t take “no” for an answer.'
    ], [
        'Behavioral',
        'They listen to various bloggers to try to choose the field that they will be interested in. In general, they do not know where to start. Don’t hesitate in buying expensive courses (as long as results are achieved).',
        'Spend a lot of time reading books and blogs, listening to podcasts or audiobooks, and watching self-help/business videos on YouTube. They’re also actively looking for online courses to become better in their field.',
        'Accustomed to achieve their goals and are sure that filling the gaps in their knowledge is easy'
    ]
]


const user_data_slider = [
    {
        person_info: {
            person_name: "Lisa Fisher",
            person_profession: 'WAITRESS',
            person_quote: 'I desperately want to change my life and become a professional but I don\'t know where to start.',
            person_image: 'person_lisa.png'
        },
        goals: [
            'Choose a suitable profession',
            'Find a feasible course',
            'Study the necessary information',
            'Find an employment in chosen profession',
            'Wants to change her life',
            'To study relevant information for the chosen field.',
            'Try a new field',
            'Wants to learn while earning',
            'Understand the threshold of entry into into the desired profession',
            'Work with flexible schedule',
            'Pay for the course that will make her successful',
            'Wants to sound like a figure of authority'
        ],
        painpoints: [
            'Doesn’t know where to start',
            'Will be course effective for me?',
            'Who will be my teachers?',
            'How much time I need to be a professional?',
            'Afraid that she can’t pay for a full course',
            'Afraid that she doesn’t know english well',
            'Afraid that she can’t work and study at the same time'
        ]
    },
    {
        person_info: {
            person_name: "Mary Smith",
            person_profession: 'Mom on maternity leave',
            person_quote: 'I want to find a hobby that would allow me to do what I love that would bring additional income.',
            person_image: 'person_mary.png'
        },
        goals: [
            'Find hobby',
            'Receive relevant knowledge',
            'Become a professional',
            'Find a job in free time',
            'Flexible schedule',
            'Receive relevant knowledge',
            'Get a new profession',
            'Find a job a new field',
            'Be working mom enough spend a lot of time with kids'
        ],
        painpoints: [
            'She is too old to start to study',
            'Will be course effective for me?',
            'Will my laptop be enough to study?',
            'Afraid that she doesn’t find enough time to study',
            'Family doesn’t support her enough',
            'Afraid that she needs to have some knowledge'
        ]
    },
    {
        person_info: {
            person_name: "Megan Bayrons",
            person_profession: 'Unemployed',
            person_quote: 'I’m disappointed in the design course as I graduated. I didn’t get a job because I don’t have enough knowledge.',
            person_image: 'person_megan.png'

        },
        goals: [
            'Find a job',
            'Receive relevant knowledge',
            'Study the necessary information',
            'To learn new skills that attract new job opportunities',
            'Fill all gaps in her knowledge',
            'Find new commercial experience',
            'Needs a mentor',
            'Needs a personal plan for her from professional',
            'Work with flexible schedule',
            'Desperate needs to find any commercial profit'
        ],
        painpoints: [
            'Useless course on her resume',
            'Will be course effective for me?',
            'She has a lot of doubts of new course',
            'Afraid to get irrelevant information',
            'If she will decides to buy a new course she wants to be sure about quality and relevant knowledge',
            'Doesn’t want to study irrelevant information'
        ]
    },
    {
        person_info: {
            person_name: "Nicolas Pellegrino",
            person_profession: 'Private entrepreneur',
            person_quote: 'I’m always busy but I need to manage Instagram page, I  need to take photos and fill it with content to attract more customers',
            person_image: 'person_nicolas.png'
        },
        goals: [
            'Manage social media for a restaurant',
            'Study in free time',
            'Choose theme that he really needs',
            'Open a new restaurant',
            'Attract new customers',
            'Understand what he should change in his work to be more successful',
            'Be the best in his field',
            'To spend more time with family',
            'More competition needs to stand out',
            'Save money for the son for the future',
            'Receive relevant knowledge'
        ],
        painpoints: [
            'How much money and time he should spend for studies?',
            'Spend a lot of time for studies',
            'Who will be my teachers?',
            'Don’t want to waist his time and money for useless information',
            'Receive just relevant knowledge'
        ]
    }
]


const pages_info = [
    {
        title: 'Dashboard',
        subtitle: 'The user can see the progress, activity, current and finished courses, has an ability to describe to webinar.',
        image_url: 'page_block_1.png'
    }, {
        title: 'Lesson',
        subtitle: 'The user can see video lessons and some information from subtitles can add to notes feature, can pass test for theory knowledge, upload practical homework.',
        image_url: 'page_block_2.png'
    }, {
        title: 'Webinar',
        subtitle: 'The user can describe to the webinar from top rate teacher and ask the questions',
        image_url: 'page_block_3.png'
    }, {
        title: 'Notes',
        subtitle: 'The user can add notes to the important and favorite articles and videos. Actively engaging in the learning process via note-taking is tied to increased retention and comprehension.',
        image_url: 'page_block_4.png'
    }, {
        title: 'Favorites',
        subtitle: 'I implemented the opportunity to save all courses from the main page to favorites.',
        image_url: 'page_block_5.png'
    }, {
        title: 'Chat',
        subtitle: 'All students can chat in the messages service with teachers, mentors, support service and with each other.',
        image_url: 'page_block_6.png'
    }
]

const GuideWork = () => {

    const [currentSlide, setCurrentSlide] = useState(1)

    const slider_settings = {
        infinite: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        swipeToSlide: true,
        adaptiveHeight: true,

        beforeChange: (current, next) => {
            setCurrentSlide(next + 1)
        }
    };

    let slider = useRef();

    return (
        <>
            <div className="container mb90">
                <div className="project_about">
                    <h1>Guide Web App</h1>
                    <div className="menu_links mt16">
                        UX Research / UX Strategy / Visual Design
                    </div>
                    <h4 className="mt40">Background</h4>
                    <div className="text_paragraph mt24 w650">
                        The multidisciplinary online university offers professionals education in various fields - photo
                        and video production, languages, programming, design, marketing, management, and so on. Take
                        this into account when designing as required functionalities may differ with various features.
                        We need to come up with a universal solution for different areas.
                    </div>
                </div>

                <div className="segments mt180">
                    <h4>Segments of Target Audience</h4>
                    <div className="table mt40">
                        <div className="table_header_row">
                            <div>Specifications</div>
                            <div>Want to study online (Primary)</div>
                            <div>Have studied online (Secondary)</div>
                            <div>Want to choose theme (Additional)</div>
                        </div>
                        {table_rows.map((element, key) => (
                                <div key={key} className="table_row">
                                    {element.map((item, key) => <div key={key}>{item}</div>)}
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="guide_slider mt180">

                    <Slider {...slider_settings} ref={c => (slider = c)} className="guide_slide">
                        {user_data_slider.map((item, key) => (


                            <div key={key}>

                                <div className="guide_slide_container">
                                    <div className="user_card">
                                        <div className="person_info_container clwhite">
                                            <img src={`/images/${item.person_info.person_image}`}
                                                 alt={item.person_info.person_name}/>
                                            <div className="person_info">
                                                <h4 className="clwhite">{item.person_info.person_name}</h4>
                                                <div className="person_profession">
                                                    {item.person_info.person_profession}
                                                </div>
                                                <div className="person_line"></div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.79163 5.52002C7.98408 5.52002 8.75078 6.78565 8.19857 7.84253L6.70348 10.704H6.87834C9.02562 10.704 10.7663 12.4447 10.7663 14.592C10.7663 16.7393 9.02562 18.48 6.87834 18.48H6.70348C4.45963 18.48 2.64062 16.661 2.64062 14.4172V11.1537C2.64062 10.8583 2.71207 10.5673 2.84885 10.3055L4.68122 6.79847C5.09181 6.01264 5.90501 5.52002 6.79163 5.52002ZM17.6259 5.52002C18.8184 5.52002 19.5851 6.78565 19.0329 7.84253L17.5378 10.704H17.7126C19.8599 10.704 21.6006 12.4447 21.6006 14.592C21.6006 16.7393 19.8599 18.48 17.7126 18.48H17.5378C15.2939 18.48 13.4749 16.661 13.4749 14.4172V11.1537C13.4749 10.8583 13.5464 10.5673 13.6831 10.3055L15.5155 6.79847C15.9261 6.01264 16.7393 5.52002 17.6259 5.52002Z" fill="#B3DDFF"/>
                                                </svg>

                                                <div className="person_quote">
                                                    {item.person_info.person_quote}
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className="person_describe">*/}
                                        <div className="person_goals">
                                            <h5>Goals</h5>
                                            <ul className='list mt16'>
                                                {item.goals.map((goal, key) => (
                                                    <li key={key}>{goal}</li>
                                                ))}

                                            </ul>
                                        </div>
                                        <div className="person_painpoints">

                                            <h5>Painpoints</h5>
                                            <ul className='list mt16'>
                                                {item.painpoints.map((painpoint, key) => (
                                                    <li key={key}>{painpoint}</li>
                                                ))}
                                            </ul>

                                        </div>
                                        {/*</div>*/}
                                    </div>

                                </div>
                            </div>
                        ))}

                    </Slider>

                    <div className="right_part">

                        <div className="persona mt40">
                            <h3 className='clblue'>Personas</h3>
                            <div className="person_text">
                                I started by exploring education system in the market and gradually got acquainted with
                                the structure of the existing product. I had also created Personas to understand user
                                needs.
                            </div>
                        </div>
                        <div className="slider_arrows mt80">
                            <div onClick={(e) => {e.preventDefault(); slider.slickPrev()}}>
                                <svg width="84" height="24" viewBox="0 0 84 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM84 10.5L2 10.5V13.5L84 13.5V10.5Z" fill="#4CAEFF"/>
                                </svg>

                                <div className="arrow_square1"></div>
                            </div>
                            <span>{currentSlide}/{user_data_slider.length}</span>
                            <div onClick={(e) => {e.preventDefault(); slider.slickNext()}}>
                                <svg width="84" height="24" viewBox="0 0 84 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M83.0607 10.9393C83.6464 11.5251 83.6464 12.4749 83.0607 13.0607L73.5147 22.6066C72.9289 23.1924 71.9792 23.1924 71.3934 22.6066C70.8076 22.0208 70.8076 21.0711 71.3934 20.4853L79.8787 12L71.3934 3.51472C70.8076 2.92893 70.8076 1.97919 71.3934 1.3934C71.9792 0.807611 72.9289 0.807611 73.5147 1.3934L83.0607 10.9393ZM0 10.5L82 10.5V13.5L0 13.5L0 10.5Z" fill="#4CAEFF"/>
                                </svg>
                                <div className="arrow_square2"></div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="design_block mt180">
                    <div className="design_text">
                        <h3 className="design_title">Insights</h3>
                        <div className="text_paragraph mt24 w440">
                            One dimensional quality - these features result in satisfaction when fulfilled and
                            dissatisfaction when not fulfilled. The features influence the choice of the users when
                            choosing a particular app.
                        </div>
                    </div>
                    <div className="design_kano">

                        <div className="design_kano1">
                            <div className="design_kano_title" data-text="One Dimensional Quality">
                                One Dimensional Quality
                            </div>
                            <ul className='list design_kano_list mt24 ml1em'>
                                <li>Studying when you can at your own pace</li>
                                <li>Possibility to create notes in LMS</li>
                                <li>Feedback from teacher</li>
                                <li>Webinar with teacher</li>
                                <li>Available chat to communicate with students</li>
                                <li>Save courses to favorites</li>
                                <li>Available additional materials</li>
                                <li>“Personal continuity” feature allows you to continue watching video on each device
                                    from the place where you stopped
                                </li>
                                <li>Recommendations for each student based on interests</li>
                                <li>Opportunity to pass test after each video lesson to understand the level of
                                    knowledge
                                </li>
                                <li>Students rate to motivate studying process</li>
                            </ul>
                        </div>
                        <div className="design_kano2">
                            <div className="design_kano2_square"></div>

                            <div className="title_rotated">
                                Must Be Quality
                            </div>
                        </div>
                        <div className="design_kano2">
                            <div className="design_kano2_square"></div>

                            <div className="title_rotated">
                                Attractive Quality
                            </div>
                        </div>
                    </div>
                </div>

                {pages_info.map((item, key) => <DesignBlock reverse={key + 1} info={item}/>)}
            </div>
        </>

    )
}

export default GuideWork