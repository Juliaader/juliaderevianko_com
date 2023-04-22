import SocialLinks from "../../components/SocialLinks/SocialLinks";
import './About.css'

const About = () => {
    const footer_array = [
        {
            column_title: "technical skills",
            elements: [
                "Figma", "Illustrator", "CSS3 + HTML5", "Adobe XD", "Adobe Photoshop", "Adobe After Effects", "Cinema4D"
            ]
        }, {
            column_title: "Design skills",
            elements: [
                "Design Thinking", "UX Research", "Design for Sustainability", "UX Strategy", "UX/UI", "Typography"
            ]
        }, {
            column_title: "Certifications",
            elements: [
                "Google UX Design Certificate, 2021", "UX/UI Design Beetroot Academy, 2021", "UX/UI Design Advanced Hillel, 2022", "Front-end Basic Hillel, 2022", "Google Analytics Certification, 2022"
            ]
        }
    ]
    return (
        <div className='container'>
            <div className="about_outer_block">
                <div className="about_me_block">
                    <div className="about_me_image">
                        <img src="/images/about_image.png" alt="Julia Derevianko"/>
                    </div>
                    <div className="about_me_text">
                        <div className="about_me_block_name">
                            <h1>Julia<br/>Derevianko</h1>
                        </div>
                        <div className="about_me_emoji">

                            <div className="about_me_emoji_container">
                                <img src="/images/icons/waving_hand.svg" alt="waving_hand_ico"/>
                                <img src="/images/icons/smiling_face_and_eyes_calling.svg" alt="smiling_face_ico"/>
                                <img src="/images/icons/hugging_face.svg" alt="hugging_face_ico"/>
                                <img src="/images/icons/backhand_index_pointing_down.svg" alt="pointer_down_ico"/>
                                <img src="/images/icons/smiling_face_with_smiling_eyes.svg" alt="smiling_face_with_smiling_eyes_ico"/>
                            </div>
                        </div>
                        <div className="about_me_quote">
                            Empathy is my best design tool as a UX designer. How do I do this? Simple! I gain a thorough
                            understanding of the target audience. My focus is on their needs and desires and that what I
                            create is accessible to them. This means happy users and happy users are happy customers.
                        </div>
                    </div>
                </div>

                <div className='about_me_line'></div>

                <div className="about_me_footer">
                    <div className="about_me_footer_column">
                        <div className="about_me_footer_column_title">
                            Education
                        </div>
                        <div className="about_me_footer_column_line"></div>
                        <div className="about_me_footer_column_address">
                            Odessa I.I.Mechnikov National University
                        </div>
                        <div className="about_me_footer_column_degree">
                            MS in Accounting and Auditing
                        </div>
                        <div className="about_me_footer_column_year">
                            June, 2008
                        </div>
                    </div>
                    {footer_array.map(item => (
                        <div className="about_me_footer_column">
                            <div className="about_me_footer_column_title">
                                {item.column_title}
                            </div>
                            <div className="about_me_footer_column_line"></div>
                            <ul className='footer_column_list'>
                                {item.elements.map(elem => (
                                    <li>{elem}</li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>


            <SocialLinks/>

        </div>
    )
}

export default About