import React from 'react';
import Header from '../components/Header';

const About = () => (
  <div className="about">
    <Header toApp={true}/>
    <div className="container">
      <h1 className="light-sea">About</h1>
      <h2 className="deeper-sea">Developer</h2>
      <h4 className="text-color">
        This site was developed by <a className="light-sea" href='https://github.com/jstettner'>Jack Stettner</a>.
        <br/>
        <br/>
        If you would like to support the program, Bitcoin donations are always appreciated: <span className="light-sea">1ALPrNsBPkbTUQocF1sJbKoBq3NKFLjZts</span>.
      </h4>
      <h2 className="deeper-sea">Security</h2>
      <h4 className="text-color">
        This site stores encrypted passwords, so even the site admins don't have access to user information.
        <br/>
        <br/>
        In addition, when a program link is shared, the program is not served to the client. Instead, the program is executed with user parameters in a sandbox on the server.
        This means any private data in the program isn't distributed to program users.
        <br/>
        <br/>
        <span className="light-sea">Despite these security measures,</span> this site still shouldn't be used for extremely sensitive information in the event of a compromise.
        <br/>
        <br/>
        We are <span className="light-sea">NOT RESPONSIBLE</span> for any user data exposed.
      </h4>
      <h2 className="deeper-sea">Work in progress</h2>
      <h4 className="text-color">
        This site is a work in progress, if you have any suggestions, or discover and bugs, please email <a href="mailto:blckbx.suggestions@gmail.com" className="light-sea">blckbx.suggestions@gmail.com</a>.
        <br/>
        <br/>
        Support for other languages are coming soon.
      </h4>
    </div>
  </div>
);

export default About;
