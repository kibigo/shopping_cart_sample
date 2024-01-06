import React from "react";

function About() {

    return (
        <div className="about-container">
            <div className="about-us">
                <h4>About us</h4>
            </div>
            <div className="about-company">
                <h1>About the company</h1>
                <p>Learn more about the company and the team behind it</p>
            </div>

            <section className="first-section">
                <div className="first-section-image">
                    <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg" />
                </div>

                <div className="first-section-content">
                    <h4>Build better, launch faster</h4>
                    <h2>We're only just getting started on our journey</h2>
                    <div className="stats">
                        <div>
                            <h1>400+</h1>
                            <p>Projects completed</p>
                        </div>
                        <div>
                            <h1>600%</h1>
                            <p>Return on investment</p>
                        </div>
                        <div>
                            <h1>10k</h1>
                            <p>Global downloads</p>
                        </div>
                        <div>
                            <h1>200+</h1>
                            <p>5-star reviews</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="second-section">
                <div>
                    <div className="paragraph">
                        <p>From startups to the world's largest companies</p>
                    </div>

                    <div className="logos">

                        <img src="https://logowik.com/content/uploads/images/t_shapeshift8102.jpg" />

                        <img src="https://img.freepik.com/free-vector/gradient-energy-logo-template_23-2149991499.jpg?size=626&ext=jpg" />

                        <img src="https://img.freepik.com/free-vector/gradient-quill-pen-logo-design-template_23-2149872836.jpg?size=626&ext=jpg" />

                        <img src="https://img.freepik.com/free-vector/logo-template-design_1289-227.jpg?size=626&ext=jpg" />

                        <img src="https://img.freepik.com/free-vector/global-economy-money-business_24877-50957.jpg?size=626&ext=jpg" />

                    </div>
                </div>
            </section>
            <section className="third-section">
                <div className="description">
                    <h4>we're hiring!</h4>
                    <h2>Meet our team</h2>
                    <p>Our philosophy is simple - hire a team of diverse, passionate people
                        and foster a culture that empowers you to do your best work.
                    </p>
                </div>
                <div>
                    <button className="about-button">
                        About us
                    </button>
                    <button className="open-button">
                        Open positions
                    </button>
                </div>
            </section>
            <section className="fourth-section">
                <div>
                    <div className="values">
                        <h4>Our values</h4>
                        <h2>How we work at Quikmart</h2>
                        <p>Our shared values keep us connected and guide us as one team</p>
                    </div>
                    <div className="value-boxes">
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828956.png"/>
                            <h3>Share team inboxes</h3>
                            <p>
                                Whether you have a team of 2 or 200, our shared team
                                inboxes keep everyone on the same page and in the loop
                            </p>
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/942/942802.png"/>
                            <h3>Deliver instant answers</h3>
                            <p>
                                An all-in-one customer service platform that helps
                                you balance everything your customers need to be happy
                            </p>
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/7872/7872008.png"/>
                            <h3>Manage your team with reports</h3>
                            <p>
                                Measure what matters with Quikmart's easy-to-use reports.
                                You can filter, export and drilldown on the data in a couple cliks.
                            </p>
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/1322/1322236.png"/>
                            <h3>Connect with customers</h3>
                            <p>
                                Solve a problem or close a sale in real-time with chat. If no one
                                is availablee, customers are seamlessly routed to email without confusion.
                            </p>
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/807/807303.png"/>
                            <h3>Connect the tools you already use</h3>
                            <p>
                                Explore 100+ integrations that make your day-to-day workflow
                                more efficient and familiar. Plus, our extensive developer tools.
                            </p>
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/11434/11434663.png"/>
                            <h3>Our people make the difference</h3>
                            <p>
                                We're an extension of your customer service team, and all of our
                                resources are free. Chat to our friendly team 24/7 when you need help.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


export default About