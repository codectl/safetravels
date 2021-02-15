import React from "react";

import Layout from "../../layouts";

const AboutUs = () => {
    return (
        <Layout>
            <div className="container">
                <div className="my-5">
                    <h3 className="text-default">About Us</h3>
                    <h5 className="mt-3">Travel with confidence</h5>
                    <p className="mt-2">
                        Worried about traveling in times like this during a pandemic? Unsure about the rule and
                        restrictions due to COVID-19?
                        The most recent pandemic has made traveling a nightmare and nearly impossible to keep up with
                        all the rules, regulations, and restrictions.
                        The last thing you want to do is make plans to where you cannot go or be quarantined as soon as
                        you get to your destination.
                    </p>
                    <p>
                        Safe Travels is your one stop shop to get the most current and reliable information about travel
                        restrictions around the world.
                        Traveling can already be a stressful event, so let Safe Travels make it easy to access all the
                        information you need about your entire trip. Plan with ease knowing you have the most up-to-date
                        information.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default AboutUs;