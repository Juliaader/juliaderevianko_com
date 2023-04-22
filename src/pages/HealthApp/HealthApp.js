import './HealthApp.css'
import DesignBlock from "../../components/DesignBlock/DesignBlock";

const persona_ujm_titles = [
    "Excited to realise her goal to find a connection with an available doctor for her son",
    "Confused because she doesn’t know that she really needs this app and what plan she should choose",
    "Stressed that she needs to pay a subscription and it will be useless",
    "Nervous that the doctor doesn’t meet her expectations",
    "Delighted that she can buy the medicine that she needs from the nearest pharmacy"
]
const persona_ujm_lists = [
    ['Download app', 'Onboarding', 'Set up account', 'Fill survey about health situation'],
    ['Explore plan options', 'Read advantages about each plan', 'Complete profile settings'],
    ['Choosing plan', 'Add payment information', 'Pay by card', 'Find available doctor for a consultation'],
    ['Choose date and time', 'Call a doctor', 'Receive recommendations and prescriptions'],
    ['Search for the nearest pharmacy', 'Buy medicine', 'Write a review about the doctor'],
    ['Quick Touch ID registration', 'Offer to add additional family members', 'Quick basic survey'],
    ['Offer free trial consultation', 'Add advantages of a permanent subscription', 'Filter doctors by type and reviews'],
    ['Quick checkout', 'Save card information for subscription'],
    ['Add rate rate and review for each doctor', 'Some information about experience and personality of each doctor'],
    ['Search for the nearest available pharmacy', 'Add a map on how to get there', 'Add a discount option for each pharmacy']
]

const final_images = [
    'final_image1.png',
    'final_image2.png',
    'final_image3.png',
    'final_image4.png'
]

const program_testing = [
    {
        title: 'Usability Study',
        subtitle: 'We implemented an unmoderated usability study with hi-fidelity prototypes to evaluate the product by testing it on users. We asked 7 participants between the ages of 18-42 who don’t have an opportunity to buy medical insurance but need to have a connection with a doctor to book an appointment.',
        image_url: 'usability_pic.png'
    }, {
        title: 'Onboarding',
        subtitle: 'The welcome screens introduce a new user to a tutorial for using the app, available features and how to get the most value out of it. The screens also inform the users about the main features and advantages of using this app.',
        image_url: 'onboarding_pic.png'
    }, {
        title: 'Touch ID',
        subtitle: 'We designed and implemented Touch ID recognition feature. Thanks to this enhancement the users can quickly and effortlessly Sign Up and Sign In and to book an appointment with a doctor.',
        image_url: 'touch_id_img.png'
    }
]

const HealthApp = () => {
    return (
        <>
            <div className='container'>
                <div className='project_about'>
                    <h1>Health App</h1>
                    <div className="menu_links mt16">
                        UX Research / UX Strategy / Visual Design
                    </div>
                    <h4 className="mt40">Challenges</h4>
                    <div className="text_paragraph mt24 w650">
                        People who do not have the opportunity to purchase health insurance do not have a connection
                        with a
                        doctor. It is necessary to develop an app that allows patients, who cannot purchase health
                        insurance, to connect with a doctor to provide cost-efficient medical services and prescriptions
                        for
                        the purchase of medication from a pharmacy.
                    </div>
                </div>
                <div className="persona_about mt180">
                    <div className='persona_image'>
                        <img src="/images/Palesa_health_app.png" alt="Palesa_image"/>
                        <div className="persona_image_text">
                            <div className='persona_name'>Palesa Cashini</div>
                            <div className='persona_age'>Age: 22 years</div>
                            <div className='persona_family'>Family: Single mom</div>
                        </div>
                    </div>
                    <div className='persona_quote_block'>
                        <div className="quote_ico">
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2783 12C17.907 12 19.6168 14.7664 18.4412 17.1177L15 24C19.9706 24 24 28.0294 24 33C24 37.9706 19.9706 42 15 42C10.0294 42 6 37.9706 6 33V24.7082C6 24.2425 6.10844 23.7831 6.31672 23.3666L10.5339 14.9322C11.4324 13.1351 13.2691 12 15.2783 12ZM39.2783 12C41.907 12 43.6168 14.7664 42.4412 17.1177L39 24C43.9706 24 48 28.0294 48 33C48 37.9706 43.9706 42 39 42C34.0294 42 30 37.9706 30 33V24.7082C30 24.2425 30.1084 23.7831 30.3167 23.3666L34.5339 14.9322C35.4324 13.1351 37.2691 12 39.2783 12Z" fill="#46AAFF"/>
                            </svg>
                        </div>
                        <div className="persona_quote">
                            I want to have the possibility to connect with a doctor at any time to be sure about the
                            health of my son.
                        </div>
                        <div className="quote_author">
                            <div className="quote_author_name">Palesa</div>
                            <svg style={{transform: "rotate(180deg)"}} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2783 12C17.907 12 19.6168 14.7664 18.4412 17.1177L15 24C19.9706 24 24 28.0294 24 33C24 37.9706 19.9706 42 15 42C10.0294 42 6 37.9706 6 33V24.7082C6 24.2425 6.10844 23.7831 6.31672 23.3666L10.5339 14.9322C11.4324 13.1351 13.2691 12 15.2783 12ZM39.2783 12C41.907 12 43.6168 14.7664 42.4412 17.1177L39 24C43.9706 24 48 28.0294 48 33C48 37.9706 43.9706 42 39 42C34.0294 42 30 37.9706 30 33V24.7082C30 24.2425 30.1084 23.7831 30.3167 23.3666L34.5339 14.9322C35.4324 13.1351 37.2691 12 39.2783 12Z" fill="#46AAFF"/>
                            </svg>
                        </div>
                    </div>
                    <div className='persona_bio_block mt24'>
                        <h4 className='clblue title_stick'>Bio</h4>
                        <div className="text_paragraph mt16">
                            Palesa is a single mom who lives with her 4 year old son. She is a waitress in a coffee
                            shop. She works hard like a lot of people, she works hard but has not had the
                            opportunity to
                            buy health insurance. Sometimes she needs an emergency doctor's visit for her son
                            <br/><br/>
                            She wants to find a doctor who will be professional and kind to her child and issue
                            prescriptions for her to purchase medication at the pharmacy.
                        </div>
                    </div>
                    <div className='persona_goals'>
                        <h4 className='clblue title_stick'>Goals</h4>
                        <ul className="list goals_list mt18 ml1em">
                            <li>Connection with a doctor</li>
                            <li>Choose a specialist</li>
                            <li>Take care of her son</li>
                            <li>Prescription to buy medicine</li>
                        </ul>

                    </div>
                    <div className='persona_motivation'>
                        <h4 className='clblue title_stick'>Motivations</h4>
                        <ul className="list goals_list mt18 ml1em">
                            <li>Her son</li>
                            <li>Support from friends and family</li>
                            <li>Feeling accepted and acknowledged</li>
                        </ul>
                    </div>
                    <div className='persona_frustrations'>
                        <h4 className='clblue title_stick mt36'>Frustrations</h4>
                        <ul className="list goals_list mt18 ml1em">
                            <li>Expensive insurance</li>
                            <li>No medical support for her son</li>
                            <li>She can’t buy medicine without a prescription</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt90 bckgblue">
                <div className="container p90 persona_story">
                    <div>
                        <h4 className='clwhite'>Archetype</h4>
                        <div className="text_paragraph clwhite mt16 ">
                            Palesa belongs to the caregiver archetype. She lives to protect and aid those around her.
                            Palesa is selfless and is moved by compassion and generosity, putting others' needs in front
                            of her own.
                        </div>
                    </div>
                    <div>
                        <h4 className='clwhite'>User Story</h4>
                        <div className="text_paragraph clwhite mt16">
                            As a waitress in a cafe who works longs hours with little pay, I don’t have the opportunity
                            to buy health insurance I want to have an accessible connection with a doctor at any time so
                            that I can feel more confident about my son's health.
                        </div>
                    </div>
                    <div>
                        <h4 className='clwhite'>Problem</h4>
                        <div className="text_paragraph clwhite mt16">
                            Palesa is a hard working waitress in a cafe who needs to have a connection with a doctor at
                            any time because she needs to take care of her son.
                        </div>
                    </div>
                    <div>
                        <h4 className='clwhite'>Hypothesis</h4>
                        <div className="text_paragraph clwhite mt16">
                            If Palesa buys a subscription of the app then she will be able to have a connection with a
                            doctor at any time.
                        </div>
                    </div>
                </div>

            </div>
            <div className="container mt90 persona_chart">
                <div className="persona_chart_btns">
                    <div className='bckgblue'>
                        <h6 className='clwhite'>Get app</h6>
                    </div>
                    <div className='bckgblue'>
                        <h6 className='clwhite'>Choose plan</h6>
                    </div>
                    <div className='bckgblue'>
                        <h6 className='clwhite'>Payment</h6>
                    </div>
                    <div className='bckgblue'>
                        <h6 className='clwhite'>Call</h6>
                    </div>
                    <div className='bckgblue'>
                        <h6 className='clwhite'>Pharmacy</h6>
                    </div>
                </div>
                <div className="persona_chart_img mt16">

                    <img src="/images/chart.svg" alt="chart_image"/>
                </div>
                <div className="persona_ujm mt16">
                    {persona_ujm_titles.map(item => (
                        <div className='persona_ujm_item'>
                            {item}
                        </div>
                    ))}

                    {persona_ujm_lists.map(item => (
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

            <div className="mt90 bckgblue kano_block">
                <div className="container p90">

                    <h3 className='clwhite'>Kano Model Analysis</h3>
                    <div className=" persona_story mt40">
                        <div>
                            <h4 className='clwhite'>01 Feature List</h4>
                            <div className="text_paragraph clwhite mt16 ">

                                Competitive audit: <br/>
                                3 direct and 2 indirect competitors.<br/>
                                Feature Comparison Matrix:<br/>
                                To compare all features of competitors. We found 16 hypotheses that we will test on our
                                users.
                            </div>
                        </div>
                        <div>
                            <h4 className='clwhite'>02 Create Suvey</h4>
                            <div className="text_paragraph clwhite mt16">
                                For each feature 3 questions:<br/>
                                Question 01:<br/>
                                How would you feel if this feature existed on the app?<br/>
                                Question 02:<br/>
                                If this feature didn't exist?<br/>
                                Question 03:<br/>
                                How important is this feature?
                            </div>
                        </div>
                        <div>
                            <h4 className='clwhite'>03 Fill the Survey</h4>
                            <div className="text_paragraph clwhite mt16">
                                There are 10 relevant features for each segment.<br/>
                                Number of respondents:<br/>
                                For each segment 8 people.<br/>
                                Format:<br/>
                                Survey
                            </div>
                        </div>
                        <div>
                            <h4 className='clwhite'>04 Analyse Data</h4>
                            <div className="text_paragraph clwhite mt16">
                                We prioritized insights by relevant features and divided all functions by
                                categories:<br/>
                                Must be<br/>
                                One-dimensional<br/>
                                Attractive
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container">

                <div className="chart_quality_block mt90">
                    <div className="chart_quality_text">
                        <div className="chart_quality_text_item">
                            <h4>Must Be Quality</h4>
                            <div className="text_paragraph mt16">
                                These are the requirements that the users expect and are taken for granted. When done
                                well, users are just neutral, but when done poorly, users are very dissatisfied.
                            </div>
                        </div>
                        <div className="chart_quality_text_item mt60">
                            <h4>One Dimensional Quality</h4>
                            <div className="text_paragraph mt16">
                                These features result in satisfaction when fulfilled and dissatisfaction when not
                                fulfilled. The features influence the choice of the users when choosing a particular
                                app.
                            </div>
                        </div>
                        <div className="chart_quality_text_item mt60">
                            <h4>Attractive Quality</h4>
                            <div className="text_paragraph mt16">These features provide satisfaction when achieved
                                fully, but do not cause dissatisfaction when not fulfilled. These are features that are
                                not normally expected and are "nice-to-haves".
                            </div>
                        </div>
                    </div>
                    <div className="chart_quality_image">
                        <img src="/images/chart_kano.svg" alt="chart_kano"/>
                    </div>
                </div>

                <div className="wireframes_block mt180">
                    <div className="wireframes_text">
                        <h3>Wireframes</h3>
                        <div className="wireframe_paragraphs">
                            <div className="wireframe_paragraph_item mt40">
                                <div className="blue_line"></div>
                                <div className="text_paragraph">Focusing on user needs we started from sketches,
                                    then we transform our ideas into low-fidelity and hi-fidelity digital wireframes.
                                </div>
                            </div>
                            <div className="wireframe_paragraph_item mt44">
                                <div className="blue_line"></div>

                                <div className="text_paragraph">We prioritized the insights that we took from the
                                    Model Kano Analysis that let us know which features will be more important to our
                                    users.
                                </div>
                            </div>
                            <div className="wireframe_paragraph_item mt44">
                                <div className="blue_line"></div>

                                <div className="text_paragraph">Easy and quick navigation to book an appointment
                                    with an available doctor was a key user need to address in the designs.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wireframes_image">
                        <img src="/images/wireframe.png" alt="wireframe_image"/>
                    </div>

                </div>


                <div className="kpi_metrics_outer mt180">
                    <h3>KPI’s Metrics</h3>
                    <div className="kpi_metrics_block mt40">
                        <div className="kpi_metrics_item">
                            <div>
                                <img src="/images/first_kpi_metrics.svg" alt="first_kpi_metrics"/>
                            </div>
                            <div>
                                <h3 className='mt32'>74%</h3>
                                <h6 className="mt24">
                                    Conversion Rate
                                </h6>
                                <div className="text_paragraph mt8">
                                    The percentage of users of our app that completed a goal (a booking an appointment
                                    with
                                    a doctor) out of the total number of participants.
                                </div>
                            </div>

                        </div>
                        <div className="kpi_metrics_item">
                            <div>
                                <img src="/images/second_kpi_metrics.svg" alt="second_kpi_metrics"/>
                            </div>
                            <div>

                                <h3 className='mt32'>16%</h3>
                                <h6 className="mt24">
                                    User Error Rate
                                </h6>
                                <div className="text_paragraph mt8">
                                    The percentage of users of our app that completed a goal (a booking an appointment
                                    with
                                    a doctor) out of the total number of participants.
                                </div>
                            </div>

                        </div>
                        <div className="kpi_metrics_item">
                            <div>
                                <img src="/images/third_kpi_metrics.svg" alt="third_kpi_metrics"/>
                            </div>
                            <div>

                                <h3 className='mt32'>92</h3>
                                <h6 className="mt24">
                                    System Usability Scale
                                </h6>
                                <div className="text_paragraph mt8">
                                    The percentage of users of our app that completed a goal (a booking an appointment
                                    with
                                    a doctor) out of the total number of participants.
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

                {program_testing.map((item, key) => <DesignBlock reverse={key + 1} info={item} shadows={false}/>)}

                <div className="signup_block mt180">
                    <div className="signup_item">
                        <div className='signup_item_text'>
                            <h3>Sign In</h3>
                            <div className="text_paragraph mt24">
                                If the user is already registered he can enter his data:
                                Name, Password. The user can also Sign In with Touch ID.
                            </div>
                        </div>
                        <img src="/images/signin_image.png" alt="signin_image"/>
                    </div>
                    <div className="signup_item ">
                        <img src="/images/signup_image.png" alt="signup_image"/>
                        <div className='mt50 signup_item_text'>
                            <h3>Sign Up</h3>
                            <div className="text_paragraph mt24">
                                The user can register on the app. To do this the user needs to enter their Name, Email,
                                Gender, Phone, Password. Our users can also use quick Touch ID registration.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="add_member_outer mt90">
                <div className="container p90">
                    <div className="add_member_block">
                        <div className="add_member_text">
                            <h3 className='clwhite'>Add Family Member</h3>
                            <div className="text_paragraph clwhite mt24">
                                We implemented the ability to connect family members to use the application. The user
                                can add up to 4 family members who will also have a connection with the doctor. This is
                                the most important one-dimensional feature that will influence users to choose this app.
                            </div>
                        </div>
                        <div className="add_member_image">
                            <img src="/images/add_member_image.png" alt="add_member_image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="payment_block mt90">
                    <div>
                        <h3>Payment</h3>
                        <div className="text_paragraph mt24">
                            We implemented a "pay-per-consultation" with a doctor or the option of buying a 3 or 12
                            months
                            subscription so that our users will be certain that they are connected with the necessary
                            specialist.
                        </div>
                        <div className="payment_image mt70">
                            <img src="/images/payment_2.png" alt="payment_2_image"/>
                        </div>
                    </div>
                    <div>
                        <img src="/images/payment.png" alt="payment_image"/>
                    </div>
                </div>

                <div className="appointment_block mt180">
                    <div>
                        <h3>Appointment</h3>
                        <div className="text_paragraph mt24">
                            The user can sort doctors by type, rate, reviews and experience. The person needs to choose
                            a day & time can book an appointment with a doctor.
                        </div>
                    </div>
                    <div>
                        <img src="/images/appointment.png" alt="appointment"/>
                    </div>
                </div>
                <div className="final_images mt180 mb90">
                    {final_images.map((img, key) => (
                        <img src={`/images/${img}`} key={key} className={key % 2 === 0 ? 'mt74' : ''} alt={img.split(".")[0]}/>
                    ))}
                </div>


            </div>
        </>
    )
}

export default HealthApp