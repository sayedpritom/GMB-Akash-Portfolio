import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="questions">
                            <h5>Difference between authorization and authentication</h5>
                            <p>The basic difference is simple. Authentification is a process that verifies if access should be given to a user or not. On the other hand, authorization is a process that determines what type of information, data and files a user can access. </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="questions">
                            <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                            <p>Firebase is a platform backed by Google. Which provides multiple services to solve common app development problems. Firebase offers popular services like Firebase Database, Firebase Cloud Storage, Firebase Cloud Messaging, and Firebase Remote Config.  </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="questions">
                            <h5>What other services does firebase provide other than authentication</h5>
                            <p>Top Alternatives for firebase Authentication are Auth0, MongoDB, Passport, Okta, JSON Web Token, Amazon Cognito, KeyCloak.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;