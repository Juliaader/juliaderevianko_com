import React, {useRef, useState} from 'react';
import './MobileStrokePage.css';
import Slider from "react-slick";
import QuoteBlock from "../../components/QuoteBlock/QuoteBlock";

const slides = [
    {
        name: 'Debbie Watson',
        position: 'Stroke Paramedic',
        img: "slide1.png",
        description: 'With the correct treatment at the correct time, stroke victims can be helped and go on to live long happy lives.',
        bio: 'Debbie has had personal experience with stroke. Her mom experienced a debilitating stroke when she was a teenager and did not receive immediate attention which could have saved her life. This motivated Debbie to pursue her bachelor\'s degree from Western University specialising in neurology. She decided to be a first responder with the mobile stroke unit to prevent deaths like her mother\'s.',
        goals: [
            'Specializing in neurology',
            'Providing effective treatment onsite',
            'Saving valuable time',
            'Gaining more experience as a specialist',
            'Dealing effectively with distraught family'
        ],
        motivation: [
            {
                title: 'Helping people',
                image: 'progress_1_1.svg',
            },
            {
                title: 'Growing as a specialist',
                image: 'progress_1_2.svg',
            },
            {
                title: 'Saving lives',
                image: 'progress_1_3.svg',
            }
        ],
        scenario: 'Debbie received a call about a stroke case. She needs to open patient record and gather the necessary information and analyses. Communicate with the neurologist and radiologist to take a decision. Providing thrombolysis therapy and taking patients to the next stage of treatment'
    },
    {
        name: 'Kathryn Murphy',
        position: 'Neurologist',
        img: "slide2.png",
        description: 'This mobile stroke unit is a lifesaver because it provides critical treatment to stroke victims.',
        bio: 'Kathryn is a neurologist with a practice of over 20 years. She needs to be able to consult the mobile stroke unit team and take a decision of providing thrombolysis therapy during an ischemic stroke.  She’s familiar with all damage that stroke can bring so understands how important to provide diagnosis and treatment in first “golden” hour.',
        goals: [
            'Ensure that the information in reports is accurate',
            'Make well-timed decisions',
            'Save patient’s time',
        ],
        motivation: [
            {
                title: 'Helping people',
                image: 'progress_2_1.svg',
            },
            {
                title: 'Minimising stroke effects',
                image: 'progress_2_2.svg',
            },
            {
                title: 'Providing life-sustaining treatment',
                image: 'progress_2_3.svg',
            }
        ],
        scenario: 'Kathryn receives a notification of stroke case. She needs to make herself available the moment she receives the push notifications. She needs to review analysis thoroughly in a short time to make a decision to provide thrombolytic therapy. She is the most responsible person in the team.'
    },
    {
        name: 'Darrell Steward',
        position: 'Radiologist',
        img: "slide3.png",
        description: 'Radiology is not my job but rather my passion. I love knowing that my diagnosis can save lives.',
        bio: 'Darrell is a radiologist at S. Alberts hospital. Darrell is a specialist in analysing CT scans of suspected stroke cases.  He is regarded as one of the leading diagnostic radiologists in the field of stroke treatment.  He takes his position very seriously as he knows it literally means life or death.  He is always doing research to ensure that he is on the cutting edge of stroke therapy.',
        goals: [
            'Receive correct data',
            'Review high quality images',
            'Be responsible for decision',
            'Be attentive to the details',
            'Be valuable asset to the team',
            'Providing crucial information to the team'
        ],
        motivation: [
            {
                title: 'Helping people',
                image: 'progress_3_1.svg',
            },
            {
                title: 'To maintain his position in the field',
                image: 'progress_3_2.svg',
            },
            {
                title: 'Saving lives',
                image: 'progress_3_3.svg',
            }
        ],
        scenario: 'Darrell receives a notification of stroke case. He needs to make himself available the moment he receives the push notifications. He needs to review Aspect scale  and provide a diagnosis in a short time to make a decision to provide thrombolytic therapy. He is an equally important part of the team.'
    }
]

const user_journey_map_titles = [
    "Debbie is energised and focused on the patient.  She realises being sloppy could result in the patient's death.",
    "Debbie is fully concentrated on the processes required for diagnosis.  This makes her nervous sometimes as a mistake could be fatal for the patient.",
    "Since Debbie has direct contact with the patient, she understands that she has the most responsibility of team. She realises that she needs to be observant and vigilant with patient care and diagnosis.",
    "The welfare of the patient during treatment is of paramount importance now. Debbie will only feel relieved once she knows it has been successful.",
    "Once the treatment has been administered the patient has to be observed at all times. She feels relief that the patient is now being treated at hospital and the case was successful."
]
const user_journey_map_lists = [
    ['Registration', 'Connect to MSU', 'Patient Activation'],
    ['RACE Stroke Test', 'CT Scan', 'Vitals'],
    ['ASPECTS score', 'Consult with team', 'Decision'],
    ['Administer treatment', 'Observe the patient'],
    ['Take patient to hospital', 'Sign off patient chart'],
    ['Quick registration & connection to the team', 'All members of the team are visible', 'Stable internet connection'],
    ['Step by step instruction', 'Automatic counter for tests', 'Possibility to receive consultation at this step'],
    ['Collect all patient info in report', 'Possibility to add other doctors for consultation'],
    ['Tests that can calculate results of the treatment process', 'Add Stroke damage test'],
    ['Generate all participants to share responsibility  between members of mobile team.', 'Ideally, the neurologist will be recipient doctor at the hospital']
]

const MobileStrokePage = () => {
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
            <div className='container'>
                <div className='project_about'>
                    <h1>Mobile Stroke Unit</h1>
                    <div className="menu_links mt16">
                        UX Research / UX Strategy / Visual Design
                    </div>
                    <h4 className="mt40">Challenges</h4>
                    <div className="text_paragraph mt24 w650">
                        A stroke is a serious life-threatening medical condition that happens when the blood supply to
                        part of the brain is cut off. Strokes are a medical emergency and urgent treatment is essential.
                        The sooner a person receives treatment for a stroke, the less damage is likely to happen. There
                        are 12 million new stroke cases every year. Almost 55% of those individuals that have suffered a
                        stroke suffer long-term or short damage. It is estimated that there are 107 million people
                        living with the devastating effects of a stroke.
                    </div>
                </div>


                <div className='mt180 possible_solutions'>
                    <div>
                        <h3>Possible Solution</h3>
                        <div className="text_paragraph mt24 w650">
                            This is an ambulance that furnishes services to diagnose, evaluate, and treat symptoms of an
                            acute stroke. This specialized ambulance includes all the tools necessary for hyperacute
                            assessment and treatment of stroke patients and diagnosis-based triage directly at the
                            emergency
                            site.
                        </div>

                        <div className="mt74 solutions_list">
                            <div className="solution_item">
                                <div className="solution_icon">
                                    <img src="/images/solutions/firstIcon.svg" alt=""/>
                                </div>
                                <div className="soulution_text">
                                    <h5>Diagnosis</h5>
                                    <div className="text_paragraph mt8 w468">
                                        Conducting the following tests:
                                        Physical exam: blood pressure, heart rate, etc.
                                        Neurological exam, CT Scan and ECG.
                                    </div>
                                </div>
                            </div>
                            <div className="solution_item">
                                <div className="solution_icon">
                                    <img src="/images/solutions/second.svg" alt=""/>
                                </div>
                                <div className="soulution_text">
                                    <h5>Decision</h5>
                                    <div className="text_paragraph mt8 w468">
                                        Refer to diagnostics and communicate with stroke team to ascertain if the stroke
                                        is
                                        ischaemic and make appropriate decisions.
                                    </div>
                                </div>
                            </div>
                            <div className="solution_item">
                                <div className="solution_icon">
                                    <img src="/images/solutions/third.svg" alt=""/>
                                </div>
                                <div className="soulution_text">
                                    <h5>Treatment</h5>
                                    <div className="text_paragraph mt8 w468">
                                        Provide thrombolysis therapy and taking patient to continue treatment
                                        in-hospital.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <QuoteBlock classname='first_quote' image='develop_personas_slider/quote1.png'
                                    position='Professor of Neurology'
                                    author='Dr. Graeme J Hankey, MBBS, MD, FRCP'>
                            Early and accurate diagnosis of stroke enables early interventions targeted to the cause,
                            which
                            may improve survival and functional recovery and minimise early recurrent stroke.
                        </QuoteBlock>


                        <QuoteBlock classname='second_quote'
                                    image='develop_personas_slider/quote2.png'
                                    position='Professor of Neurological Surgery'
                                    author='Dr. Alexander Khalessi, MD'>
                            For patients with large-vessel blockages in the brain, these procedures reverse otherwise
                            fatal or severely disabling strokes.
                        </QuoteBlock>

                    </div>
                </div>

                <div className="scope_of_work mt180">
                    <h3>Scope of Work</h3>
                    <div className="scope_of_work_block mt40">

                        <div className="scope_of_work_item">
                            <div className="scope_of_work_item_title">
                                <h6 className='clblue'>UX Research</h6>
                            </div>
                            <div className="text_paragraph mt22">
                                Desk Research
                            </div>
                            <div className="text_paragraph mt16">
                                Stroke’s Problem
                            </div>
                            <div className="text_paragraph mt16">
                                Current Solutions
                            </div>

                        </div>

                        <div className="scope_of_work_item">
                            <div className="scope_of_work_item_title">
                                <h6 className='clblue'>Understanding the User</h6>
                            </div>
                            <div className="text_paragraph mt22">
                                Develop Personas
                            </div>
                            <div className="text_paragraph mt16">
                                User Journey Map
                            </div>
                            <div className="text_paragraph mt16">
                                User Flow Diagram
                            </div>

                        </div>

                        <div className="scope_of_work_item">
                            <div className="scope_of_work_item_title">
                                <h6 className='clblue '>Testing Process</h6>
                            </div>
                            <div className="text_paragraph mt22">
                                Wifeframes
                            </div>
                            <div className="text_paragraph mt16">
                                Usability Testing
                            </div>
                            <div className="text_paragraph mt16">
                                Usability Outcomes
                            </div>
                        </div>

                        <div className="scope_of_work_item">
                            <div className="scope_of_work_item_title">
                                <h6 className='clblue'>Visual Design</h6>
                            </div>
                            <div className="text_paragraph mt22">
                                Concept
                            </div>
                            <div className="text_paragraph mt16">
                                Style Guide
                            </div>
                            <div className="text_paragraph mt16">
                                UI Design
                            </div>

                        </div>
                    </div>
                </div>

                <div className="develop_personas_block mt180">
                    <div className="flex2">
                        <div>
                            <h3>Develop Personas</h3>
                            <div className="text_paragraph mt16 w650">
                                It is the users who decide whether a product is useful or not. Therefore, we have to
                                gather
                                and
                                analyze our data on users and develop Personas. Our personas are broken up into 2
                                segments:
                                primary users being the Stroke Paramedics that provide all diagnosis and treatment
                                processes
                                and
                                the secondary segment of Neurologists and Radiologists who are responsible for the
                                decision
                                of
                                providing the necessary therapy or not.
                            </div>
                        </div>
                        <div className="develop_personas slider_arrows">
                            <div onClick={(e) => {
                                e.preventDefault();
                                slider.slickPrev()
                            }}>
                                <svg width="84" height="24" viewBox="0 0 84 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM84 10.5L2 10.5V13.5L84 13.5V10.5Z"
                                        fill="#4CAEFF"/>
                                </svg>

                                <div className="arrow_square1"></div>
                            </div>
                            <span>{currentSlide}/{slides.length}</span>
                            <div onClick={(e) => {
                                e.preventDefault();
                                slider.slickNext()
                            }}>
                                <svg width="84" height="24" viewBox="0 0 84 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M83.0607 10.9393C83.6464 11.5251 83.6464 12.4749 83.0607 13.0607L73.5147 22.6066C72.9289 23.1924 71.9792 23.1924 71.3934 22.6066C70.8076 22.0208 70.8076 21.0711 71.3934 20.4853L79.8787 12L71.3934 3.51472C70.8076 2.92893 70.8076 1.97919 71.3934 1.3934C71.9792 0.807611 72.9289 0.807611 73.5147 1.3934L83.0607 10.9393ZM0 10.5L82 10.5V13.5L0 13.5L0 10.5Z"
                                        fill="#4CAEFF"/>
                                </svg>
                                <div className="arrow_square2"></div>
                            </div>
                        </div>
                    </div>


                    <Slider {...slider_settings} ref={c => (slider = c)} className="guide_slides mt106">
                        {slides.map((slide, index) => (

                            <div key={index}>
                                <div>
                                    <div className="mobile_stroke_slide_title">
                                        <h5 className='text_title'>{slide.name}</h5>
                                        <h4 className='accent'>{slide.position}</h4>
                                    </div>
                                    <div className="mobile_stroke_slide">
                                        {/*<div className="row">*/}
                                        <div className="first_row_image">
                                            <img src={`/images/develop_personas_slider/${slide.img}`} alt=""/>
                                        </div>
                                        <div className="first_row_text mt24">
                                            {slide.description}
                                        </div>
                                        {/*</div>*/}
                                        {/*<div className="row">*/}
                                        <div className="second_row_bio_block">
                                            <h5>Bio</h5>
                                            <div className="text_paragraph mt22">
                                                {slide.bio}
                                            </div>
                                        </div>
                                        <div className="second_row_goals_block mt40">
                                            <h5>Goals</h5>
                                            <div>
                                                <ul className='list mt22'>
                                                    {slide.goals.map((goal, index) => (
                                                        <li key={index} className='text_paragraph'>{goal}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        {/*</div>*/}
                                        {/*<div className="row">*/}
                                        <div className="third_row_motivation_block">
                                            <h5>Motivation</h5>
                                            <div className="third_row_motivation_items mt22">
                                                {slide.motivation.map((motivation, index) => (
                                                    <div key={index} className="third_row_motivation_item">
                                                        <div className="page_subtitle">
                                                            {motivation.title}
                                                        </div>
                                                        <div className="third_row_motivation_item_image">
                                                            <img
                                                                src={`/images/develop_personas_slider/${motivation.image}`}
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="third_row_scenario_block mt40">
                                            <h5>Scenario</h5>
                                            <div className="text_paragraph mt22">
                                                {slide.scenario}
                                            </div>
                                        </div>
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>
                <div className='user_journey_map mt180'>
                    <h3>User Journey Map</h3>
                    <div className="text_paragraph mt16 w650">
                        Every successful journey begins with a map and so does our customer’s journey. We need to think
                        and feel like the user, put ourselves in their shoes so that we can create a design that will
                        not only help them but show that we really thought about our customers. The user journey map is
                        focused on the Primary Persona or Stroke paramedics.
                    </div>
                    <div className="mt60 persona_chart">
                        <div className="persona_chart_btns">
                            <div className='bckgblue'>
                                <h6 className='clwhite'>Patient Activation</h6>
                            </div>
                            <div className='bckgblue'>
                                <h6 className='clwhite'>Diagnosis</h6>
                            </div>
                            <div className='bckgblue'>
                                <h6 className='clwhite'>Decision</h6>
                            </div>
                            <div className='bckgblue'>
                                <h6 className='clwhite'>Treatment</h6>
                            </div>
                            <div className='bckgblue'>
                                <h6 className='clwhite'>Case Completed</h6>
                            </div>
                        </div>
                        <div className="persona_chart_img mt16">

                            <img src="/images/develop_personas_slider/chart.svg" alt="chart_image"/>
                        </div>
                        <div className="persona_ujm mt16">
                            {user_journey_map_titles.map(item => (
                                <div className='persona_ujm_item'>
                                    {item}
                                </div>
                            ))}

                            {user_journey_map_lists.map(item => (
                                <div className='persona_ujm_item mt22'>
                                    <ul className='list ml1em'>
                                        {item.map(li => (
                                            <li className='mt8'>{li}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

                <div className="usability_testing mt180">
                    <h3>Usability Testing</h3>
                    <div className="text_paragraph mt16 w650">
                        The goal of usability testing is to understand how real users interact with the app and make
                        changes based on the results. The user feedback might not all be positive, however it will
                        always make the product better.
                    </div>

                    <div className="usability_testing_block mt60">
                        <div className="usability_testing_row">
                            <div className="usability_testing_row_item">
                                <div className="usability_testing_row_item_title">
                                    <h6>Goal</h6>
                                </div>
                                <div className="text_paragraph">
                                    Figure out if the app actually allows users to make a diagnosis, communicate to make
                                    a decision, provide trombolysis treatment.
                                </div>
                            </div>
                            <div className="usability_testing_row_item">
                                <div className="usability_testing_row_item_title">
                                    <h6>Methodology</h6>
                                </div>
                                <div className="text_paragraph">
                                    Unmoderated Usability Study <br/>
                                    Location: Online<br/>
                                    Date: Feb, 2023<br/>
                                    Length: Each session will last 10-15 minutes Participants: 2 neurologists,
                                    paramedic, stuff nurse
                                </div>
                            </div>
                            <div className="usability_testing_row_item">
                                <div className="usability_testing_row_item_title">
                                    <h6>Research Questions</h6>
                                </div>
                                <div className="usability_testing_row_item_text">
                                    <ol style={{marginLeft: '15px'}}>
                                        <li className='text_paragraph'>How long does it take to create a patient
                                            record?
                                        </li>
                                        <li className='text_paragraph'>Do users understand how to upload a CT Scans to
                                            the app?
                                        </li>
                                        <li className='text_paragraph'>Are there parts of the user flow where users may
                                            get stuck?
                                        </li>
                                        <li className='text_paragraph'>Can users easily navigate to different parts of
                                            the app from the patient
                                            registration?
                                        </li>
                                        <li className='text_paragraph'>Do users think the app is easy or difficult to
                                            use?
                                        </li>
                                        <li className='text_paragraph'>Do users understand how to start a call and
                                            invite other doctors?
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="usability_testing_row">
                            <div className="usability_testing_row_item">

                                <div className="usability_testing_row_item_title">
                                    <h6>Prompts</h6>
                                </div>
                                <div className="usability_testing_row_item_text">
                                    <div className='text_paragraph mt22'>
                                        Prompt 1: Open the app. Sign In, Connect with the medical team. Register the
                                        patient. Begin RACE test. Prompt 1 follow-up: Was the task easy or difficult to
                                        complete? Is there anything you would change about the process of starting the
                                        app?
                                    </div>
                                    <div className="text_paragraph mt22">
                                        Prompt 2: Upload CT scans, Review the results of the scans.
                                    </div>
                                    <div className="text_paragraph mt22">
                                        Prompt 3: Begin consultation with medical team for diagnosis. Make a decision to
                                        begin treatment.
                                    </div>
                                    <div className="text_paragraph mt22">
                                        Prompt 4: Begin treatment. Test patient to see extent of damage from the stroke.
                                    </div>
                                    <div className="text_paragraph mt22">
                                        Prompt 5: Generate a report to add to patient chart. Prompt 5 follow-up: Was the
                                        treatment successful or not? If not provide details. Close the case on the
                                        system.

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="kpi_metrics_outer mt180">
                    <h3>KPI’s Metrics</h3>
                    <div className="kpi_metrics_block mt40">
                        <div className="kpi_metrics_item">
                            <div>
                                <img src="/images/develop_personas_slider/conversion.svg" alt="first_kpi_metrics"/>
                            </div>
                            <div>
                                <h3 className='mt32'>64%</h3>
                                <h6 className="mt24">
                                    Conversion Rate
                                </h6>
                                <div className="text_paragraph mt8">
                                    The percentage of users of our app that completed all 3 flows out of the total
                                    number of participants.
                                </div>
                            </div>

                        </div>
                        <div className="kpi_metrics_item">
                            <div>
                                <img src="/images/develop_personas_slider/user_error.svg" alt="second_kpi_metrics"/>
                            </div>
                            <div>

                                <h3 className='mt32'>14.6%</h3>
                                <h6 className="mt24">
                                    User Error Rate
                                </h6>
                                <div className="text_paragraph mt8">
                                    The number of times a user made a wrong entry. The UER gave us an idea of how to
                                    improve user flow in the app.
                                </div>
                            </div>

                        </div>
                        <div className="kpi_metrics_item">
                            <div>
                                <img src="/images/develop_personas_slider/sus.svg" alt="third_kpi_metrics"/>
                            </div>
                            <div>

                                <h3 className='mt32'>85%</h3>
                                <h6 className="mt24">
                                    System Usability Scale
                                </h6>
                                <div className="text_paragraph mt8">
                                    We used surveys to evaluate the usability and get actionable insights into our app.
                                    We got a good measure of user satisfaction.
                                </div>
                            </div>


                        </div>
                    </div>

                </div>


                <div className='mt180 usability_block '>
                    <div>


                        <h3>Usability Outcomes</h3>
                        <div className="text_paragraph mt24 w650">
                            Usability helps me identify problems users will have with a specific UI and reveals
                            difficult-to-complete tasks and confusing language. The main changes detected during the
                            usability testing is as follows:
                        </div>

                        <div className="mt74 solutions_list">
                            <div className="solution_item">
                                <div className="solution_icon">
                                    <img src="/images/solutions/firstIcon.svg" alt=""/>
                                </div>
                                <div className="soulution_text">
                                    <h5>Relevant Data</h5>
                                    <div className="text_paragraph mt8 w468">
                                        Remove all useless analysis. If a patient is treated in time, a stroke's effects
                                        may
                                        be reversed. Each second wasted means the death of 2 million neurones.
                                    </div>
                                </div>
                            </div>
                            <div className="solution_item">
                                <div className="solution_icon">
                                    <img src="/images/solutions/timer.svg" alt=""/>
                                </div>
                                <div className="soulution_text">
                                    <h5>Remove Timer</h5>
                                    <div className="text_paragraph mt8 w468">
                                        Concentration on the patient is critical. A timer will put unnecessary pressure
                                        on
                                        the paramedic and mistakes can be made since the paramedic's concentration has
                                        shifted to the timer instead of the patient.
                                    </div>
                                </div>
                            </div>
                            <div className="solution_item">
                                <div className="solution_icon">
                                    <img src="/images/solutions/note.svg" alt=""/>
                                </div>
                                <div className="soulution_text">
                                    <h5>Add Report</h5>
                                    <div className="text_paragraph mt8 w468">
                                        The report should include the team involved and the treatment administered. This
                                        provides a record for the hospital and the patient to show all processes where
                                        followed and the best treatment options have been administered.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <QuoteBlock classname='first_quote'
                                    position='Neurologist, at S. Alberta Hospital'>
                            A stroke is a medical emergency so we cannot be distracted by unnecessary information. We
                            also have to have the entire team on board to take responsibility for all cases that pass
                            through our doors.
                        </QuoteBlock>


                        <QuoteBlock classname='second_quote'
                                    position='Neurologist, at S. Alberta Hospital'>
                            Quick intervention during a stroke will help limit the negative impacts of a stroke. If we
                            waste time we can lose the patient.
                        </QuoteBlock>

                    </div>
                </div>

                <div className="pages_block mt180">
                    <div className="page_text">
                        <h3 className="page_title w440">Connection to Mobile Unit</h3>
                        <div className="page_subtitle mt24 w440">Log In screens and connect to the stroke team at the
                            beginning of the shift. All members of the team are visible.
                        </div>
                    </div>
                    <img className={'mobile_center'} src={`/images/develop_personas_slider/img1.png`}
                         alt='Connection to Mobile Unit'/>
                </div>

                <div className="pages_block mt180">
                    <div className="page_text">
                        <h3 className="page_title w650">Create Patient Record</h3>
                        <div className="page_subtitle mt24 w650">
                            The patient activation screens. All relevant data should be collected to make a diagnosis
                            and from there to administer the correct treatment.
                        </div>
                        <img style={{display: 'flex', margin: '70px auto 0'}} className={'desktop_only'}
                             src={`/images/develop_personas_slider/img2_2.png`}
                             alt='Create Patient Record'/>
                    </div>
                    <img className={'mobile_center'} src={`/images/develop_personas_slider/img2.png`}
                         alt='Create Patient Record'/>
                </div>

                <div>
                    <div className="pages_block mt180">
                        <div className="page_text">
                            <h3 className="page_title w650">Neurological Exam</h3>
                            <div className="page_subtitle mt24 w650">
                                The RACE Scale for Stroke is based on the well-known NIH Stroke Scale assessment and
                                predicts stroke caused by large vessel occlusion (LVO). Provides in the prehospital
                                environment to help predict LVO.
                            </div>

                        </div>
                    </div>
                    <div className="final_images2" style={{width: '80%', margin: '74px auto 0', display: 'flex'}}>
                        <div>
                            <img src={`/images/develop_personas_slider/img3_1.png`} alt='img3_1'/>
                            <img src={`/images/develop_personas_slider/img3_2.png`} className='mt74' alt='img3_2'/>
                        </div>
                        <div>
                            <img src={`/images/develop_personas_slider/img3_3.png`} alt='img3_3'/>
                            <img src={`/images/develop_personas_slider/img3_4.png`} className='mt74' alt='img3_4'/>
                        </div>

                    </div>
                </div>

                <div className="signup_block mt180">
                    <div className="signup_item">
                        <div className='signup_item_text'>
                            <h3>No Haemorrhage Detected</h3>
                            <div className="text_paragraph mt24">
                                No bleeding is detected in this patient's CT scan. It is likely an ischemic stroke. The
                                ASPECT scale needs to be calculated.
                            </div>
                        </div>
                        <img src="/images/develop_personas_slider/img4_1.png" alt="No Haemorrhage Detected"/>
                    </div>
                    <div className="signup_item ">
                        <img src="/images/develop_personas_slider/img4_2.png" style={{maxWidth: '257px'}}
                             alt="Suspected Haemorrhage"/>
                        <div className='mt50 signup_item_text'>
                            <h3>Suspected Haemorrhage</h3>
                            <div className="text_paragraph mt24">
                                Hemorrhagic strokes are caused by a weakened vessel that ruptures and bleeds into the
                                surrounding brain. The blood accumulates and compresses the surrounding brain tissue.
                                Immediate hospitalisation. ASPECT scale is disabled in this case.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pages_block mt180">
                    <div className="page_text">
                        <h3 className="page_title w520">ASPECTS Score</h3>
                        <div className="page_subtitle mt24 w520">ASPECTS score is a 10-point quantitative score used to
                            assess early ischemic changes in non-contrast CT head. A normal brain has a score of 10 and
                            as more areas are affected the score falls.
                        </div>
                    </div>
                    <img className={'mobile_center'} src={`/images/develop_personas_slider/img5.png`}
                         alt='ASPECTS Score'/>
                </div>

                <div className="pages_block column_reversed mt180"
                     style={{width: '90%', marginLeft: '10%', alignItems: 'flex-start', overflow: 'hidden'}}>
                    <div style={{position: 'relative'}}>
                        <img style={{maxWidth: '100%'}} src={`/images/develop_personas_slider/img6.png`}
                             alt='Physical Exam 1'/>
                        <img className={'cardiogram'}
                             src={`/images/develop_personas_slider/cardiogram.png`}
                             alt='Physical Exam 2'/>
                        <img className={'bloodSugar'}
                             src={`/images/develop_personas_slider/bloodSugar.png`}
                             alt='Physical Exam 3'/>
                    </div>

                    <div className="page_text">
                        <h3 className="page_title w520">Physical Exam</h3>
                        <div className="page_subtitle mt24 w520">Vital signs such as temperature, blood pressure etc.
                            are useful in detecting or monitoring medical problems thus alerting medical professionals
                            to potential concerns
                        </div>
                    </div>
                </div>

                <div className="pages_block mt180">
                    <div className="page_text">
                        <h3 className="page_title w520">Trombolysis Therapy</h3>
                        <div className="page_subtitle mt24 w520">The call screen allows the user to choose thrombolytic
                            therapy and provides a detailed treatment plan for the patient. Thrombolytics restore
                            cerebral blood flow in some patients with acute ischemic stroke and may lead to improvement
                            or resolution of neurologic deficits. Thrombolytic therapy is of proven and substantial
                            benefit for select patients with acute cerebral ischemia.
                        </div>
                    </div>
                    <img className={'mobile_center'} src={`/images/develop_personas_slider/img7.png`}
                         alt='Trombolysis Therapy'/>
                </div>


                <div>
                    <div className="pages_block mt180">
                        <div className="page_text">
                            <h3 className="page_title w650">Stroke Damage Test</h3>
                            <div className="page_subtitle mt24 w650">
                                The National Institutes of Health Stroke Scale, or NIH Stroke Scale (NIHSS), is a tool
                                used by healthcare providers to objectively quantify the impairment caused by a stroke.
                                This detailed test assesses the effectiveness of the therapy and is done en route to the
                                hospital.
                            </div>

                        </div>
                    </div>
                    <div className="final_images2" style={{width: '80%', margin: '74px auto 0', display: 'flex'}}>

                        <div>
                            <img src={`/images/develop_personas_slider/img8_1.png`} alt='img8_1'/>
                            <img src={`/images/develop_personas_slider/img8_2.png`} className='mt74' alt='img8_2'/>
                        </div>
                        <div>
                            <img src={`/images/develop_personas_slider/img8_3.png`} alt='img8_3'/>
                            <img src={`/images/develop_personas_slider/img8_4.png`} className='mt74' alt='img8_4'/>
                        </div>


                    </div>
                </div>


                <div className="pages_block mt180">
                    <div className="page_text">
                        <h3 className="page_title w520">Case Completed</h3>
                        <div className="page_subtitle mt24 w520">Once the patient has been admitted to hospital, the MSU
                            portion is complete and all responsible members of the team sign off the case. A chart
                            detailing
                            patient's vitals and treatment is generated and submitted to the hospital automatically.
                        </div>
                    </div>
                    <img className={'mobile_center'} src={`/images/develop_personas_slider/img9.png`}
                         alt='Case Completed'/>
                </div>

                <div className="conclusion_block mt180">
                    <div className="row">
                        <div className="conclusion_block_list">
                            <div className="conclusion_block_item">
                                <div>
                                    <span className="conclusion_block_item_letter">F</span>
                                    <h3>ace</h3>
                                </div>
                                <span className='page_subtitle'>Is it drooping?</span>
                            </div>
                            <div className="conclusion_block_item">
                                <div>
                                    <span className="conclusion_block_item_letter">A</span>
                                    <h3>rms</h3>
                                </div>
                                <span className='page_subtitle'>Can you raise both?</span>
                            </div>
                            <div className="conclusion_block_item">
                                <div>
                                    <span className="conclusion_block_item_letter">S</span>
                                    <h3>peech</h3>
                                </div>
                                <span className='page_subtitle'>Is it slurred or jumbled?</span>
                            </div>
                            <div className="conclusion_block_item">
                                <div>
                                    <span className="conclusion_block_item_letter">T</span>
                                    <h3>ime</h3>
                                </div>
                                <span className='page_subtitle'>To call emergency services right away.</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h3 className="page_title">Conclusion</h3>
                        <div className="text_paragraph w520 mt24">The brain is a remarkable organ. It houses our
                            personalities,
                            powers our bodies and controls all the functions related to healthy living. The aftermath of
                            a stroke however can be devastating. Chunks of the personality can be destroyed, sadly
                            changing the one you love forever. Be attentive to your well-being and be an advocate for
                            better health to those you love.
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default MobileStrokePage