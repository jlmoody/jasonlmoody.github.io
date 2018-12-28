import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var things = this.props.data.things;
      var technologies = this.props.data.technologies;

    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Jason L Moody Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
              <p>{bio}</p>
            <h2>Things That Excite Me</h2>
              <p>{things}</p>
            <h2>Technologies I Enjoy</h2>
              <p>{technologies}</p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
