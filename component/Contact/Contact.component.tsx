import React from 'react'

import Mail from '../../svg/Mail'
import Location from '../../svg/Location'
import Call from '../../svg/Call'
import CustomImage from '../CustomImage/CustomImage.component'

const Contact: React.FC = () => {
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_z4chy2g', 'template_jnu3x6d', e.target, 'user_9K39Uau0LixO1jkRl22bR')
    //     .then((result) => {
    //         console.log(result.text);
    //         alert('Your message is successfully send to Ashish Gupta. Will contact you in next 24hrs 😊');
    //         e.target.reset();
    //     }, (error) => {
    //         console.log(error.text);
    //         alert("Couldn't send mail. Please contact via call or whatsapp");
    //     });
    // };

    return (
        <div className="contact-container" id="contact">
            <div className="map-container">
                <iframe
                    className="map"
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471.03051503453145!2d72.82227618357634!3d19.184537024939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1618170127691!5m2!1sen!2sin"
                    title="home"
                />
            </div>

            <div className="contact-color-container">
                <div className="mini-dot">
                    <CustomImage src="/image/icons/dot.png" />
                </div>
                <div className="light-star">
                    <CustomImage src="/image/icons/light-star.png" />
                </div>

                <div className="light-star star2">
                    <CustomImage src="/image/icons/light-star.png" />
                </div>

                <div className="light-triangle">
                    <CustomImage src="/image/icons/light-triangle.png" />
                </div>

                <div className="light-triangle triangle2">
                    <CustomImage src="/image/icons/light-triangle.png" />
                </div>

                <div className="light-wave">
                    <CustomImage src="/image/icons/light-wave.png" />
                </div>

                <div className="light-wave wave2">
                    <CustomImage src="/image/icons/light-wave.png" />
                </div>

                <div className="light-wave wave3">
                    <CustomImage src="/image/icons/light-wave.png" />
                </div>

                <div className="light-wave wave4">
                    <CustomImage src="/image/icons/light-wave.png" />
                </div>

                <div className="circle-fill" />

                <div className="box-fill" />
                <div className="box-mini-bar" />
            </div>
            {/* ***  Color-container end  ***** */}

            <div className="contact-section">
                <div className="section-flex">
                    <div className="section-left">
                        <h3>Get in Touch</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit explicabo animi deserunt molestiae iure
                            aut, inventore eveniet, quisquam consectetur sed non
                            dolore culpa officiis delectus. Ducimus atque
                            pariatur id soluta.
                        </p>

                        <div className="mini-flex">
                            <div className="mini-flex-left">
                                <div className="i-container">
                                    <Location className="i" />
                                </div>
                            </div>
                            <div className="mini-flex-right">
                                <h5>
                                    Plot No: 62, Room No:15, Gate No:7, <br />
                                    NCC Malwani Malad west Mumbai 400095
                                </h5>
                            </div>
                        </div>

                        <div className="mini-flex">
                            <div className="mini-flex-left">
                                <div className="i-container">
                                    <Mail className="i" />
                                </div>
                            </div>
                            <div className="mini-flex-right">
                                <h5>
                                    <a href="mailto: guptaashish8689@gmail.com">
                                        guptaashish8689@gmail.com
                                    </a>
                                </h5>
                            </div>
                        </div>

                        <div className="mini-flex">
                            <div className="mini-flex-left">
                                <div className="i-container">
                                    <Call className="i" />
                                </div>
                            </div>
                            <div className="mini-flex-right">
                                <h5>
                                    <a href="tel: 8689868867">+91 8689868867</a>
                                </h5>
                                <h5>
                                    <a href="tel: 7021606307">+91 7021606307</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* ***  Section left end  **** */}

                    <div className="section-right">
                        <h3>Send a Message</h3>
                        <form method="POST" onSubmit="sendEmail">
                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        autoComplete="off"
                                        name="fname"
                                        placeholder="First Name"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        autoComplete="off"
                                        name="lname"
                                        placeholder="Last Name"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        autoComplete="off"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        autoComplete="off"
                                        name="phone"
                                        placeholder="Mobile no"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea
                                    autoComplete="off"
                                    className="w-100"
                                    cols={10}
                                    name="message"
                                    placeholder=" Your Message"
                                    rows={2}
                                />
                            </div>

                            <button className="button active" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
