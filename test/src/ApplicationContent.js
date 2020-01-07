import React, { Component } from 'react';

class Application extends Component {
        constructor(props) {
          super(props);
          this.state = {

          };
      
          this.handleInputChange = this.handleInputChange.bind(this);
        }
        getData(e) {
            e.preventDefault();
            fetch("https://reqres.in/api/users/2")
                .then(res => res.json())
                .then(res => this.setState({ apiResponse: res }))
                .then(console.log(this.state));
        }
        putData(e) {
            e.preventDefault();
            console.log(this.state)
            if(this.state.acknowledgement){                
                fetch("https://reqres.in/api/users/2", {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.state),
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }
        }
        handleInputChange(event) {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name = target.name;
      
          this.setState({
            [name]: value
          });
          console.log(this.state)
        }
        handleSubmit(event) {
            event.preventDefault();
            console.log(this.state)
        }
    render() {
        return (
                <div style={{ margin:"100px" }}>
                    <br/>
                    <form>
                        <label>First Name</label>
                        <input className="required" onChange={this.handleInputChange} name="firstName" placeholder="First Name" /><br/>
                        <label>Last Name</label>
                        <input className="required" onChange={this.handleInputChange} name="lastName" placeholder="Last Name" /><br/>
                        <label>Email</label>
                        <input className="required" onChange={this.handleInputChange} name="email" type="email" placeholder="Enter Email" /><br/>
                        <label>Phone</label>
                        <input className="required" onChange={this.handleInputChange} name="phone" placeholder="Enter Phone Number" /><br/>
                        <label>Address</label>
                        <input className="required" onChange={this.handleInputChange} name="address" placeholder="1234 Main St" /><br/>
                        <label>Address 2</label>
                        <input onChange={this.handleInputChange} name="address2" placeholder="Apartment, studio, or floor" /><br/>
                        <label>City</label>
                        <input className="required" onChange={this.handleInputChange} name="city" placeholder="New York City"/><br/>
                        <label>State</label>
                        <input className="required" onChange={this.handleInputChange} name="state" placeholder="New York"/><br/>
                        <label>Zip</label>
                        <input className="required" onChange={this.handleInputChange} name="zip" placeholder="10001"/><br/>
                        <label>Online Profile 1</label>
                        <input onChange={this.handleInputChange} name="onlineProfile1" placeholder="Ex: LinkedIn"/><br/>
                        <label>Online Profile 2</label>
                        <input onChange={this.handleInputChange} name="onlineProfile2" placeholder="Ex: GitHub"/><br/>
                        <label>Online Profile 3</label>
                        <input onChange={this.handleInputChange} name="onlineProfile3" placeholder="Ex: Portfolio"/><br/>
                        <label>Short Bio</label>
                        <textarea onChange={this.handleInputChange} name="shortBio" placeholder="Write a little about yourself. Any highlights or anything you'd like us to know."></textarea><br/>
                        <label>How did you hear about our program?</label><br/>
                        <select className="required" onChange={this.handleInputChange} name="hearAboutProgram" as="select">
                            <option>LinkedIn</option>
                            <option>Facebook</option>
                            <option>Google</option>
                            <option>Twitter</option>
                            <option>Facebook</option>
                            <option>Veterans Affaris</option>
                            <option>Operation Code</option>
                            <option>Hiring Heroes</option>
                            <option>IVMF</option>
                            <option>Friend/Family</option>
                            <option>Warrior Scholar</option>
                            <option>Course Report</option>
                            <option>GitHub</option>
                            <option>Reddit</option>
                            <option>Article</option>
                            <option>Other</option>
                        </select><br/>
                        <label>Which cohort are you applying to?</label><br/>
                        <select className="required" onChange={this.handleInputChange} name="whichCohort" as="select">
                            <option>March 2 - August 7 2019</option> 
                            <option>September 1 - February 26 2019</option> 
                        </select><br/>
                        <label>How would you like to attend?</label><br/>
                        <select className="required" onChange={this.handleInputChange} name="howToAttend" as="select">
                            <option>Virtual</option>
                            <option>In-Person (Syosset, NY)</option>
                        </select><br/>
                        <label>What is your highest education level?</label><br/>
                        <select className="required" onChange={this.handleInputChange} name="highestEDU" as="select">
                            <option>High School</option>
                            <option>Associate Degree</option>
                            <option>Bacherlors Degree</option>
                            <option>Masters</option>
                            <option>Doctorate</option>
                        </select><br/>
                        <label>List any other education not included above:</label><br/>
                        <input onChange={this.handleInputChange} placeholder="Certifications, self-learning, etc.."/><br/>
                        <label>Which of the following do you identify with (select all that apply)?<br/>
                            <label>Caucasian
                                <input name="Caucasian" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>African American
                                <input name="AfricanAmerican" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Hispanic or Latin Origin
                                <input name="HispanicOrLatinOrigin" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Asian
                                <input name="Asian" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Native American
                                <input name="NativeAmerican" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Native Hawaiian or Other Pacific Islander
                                <input name="NativeHawaiianOrOtherPacificIslander" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Middle Eastern or North African
                                <input name="MiddleEasternOrNorthAfrican" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Female
                                <input name="Female" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Male
                                <input name="Male" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Nonbinary
                                <input name="Nonbinary" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>LGBTQIA+
                                <input name="LGBTQIA+" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Other
                                <input name="Other" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                        </label>
                        <label>What are your primary intentions for enrolling in this program?</label><br/>
                        <select className="required" onChange={this.handleInputChange} name="intentionsForEnrolling" as="select">
                            <option>I intend to start a new lob within 180 days of graduating the program.</option>
                            <option>I intend to start a business or become a self-employed contractor upon graduation.</option>
                            <option>I intend to remain with my current employer upon graduation.</option>
                            <option>I am attending the program to learn new skills for self-enrichment and do not intent to pursue a job upon graduation.</option>
                            <option>I am attending the program in preparation to enroll in an accredited post-secondary institution and do not intend to pursue a job upon graduation.</option>
                            <option>Other</option>
                        </select><br/>
                        <label>What is your coding experience?</label><br/>
                        <select className="required" onChange={this.handleInputChange} name="codingExperience" as="select">
                            <option>None</option>
                            <option>Beginner (100 hours or less of tutorials)</option>
                            <option>Intermediate (Three or fewer classes and personal projects)</option>
                            <option>Advanced (Degree or professional experience)</option>
                        </select><br/>
                        <label>Are you interested in any of the following scholarships?</label><br/>
                            <label>Homemaker Returning to the workforce
                                <input name="Homemaker Returning to the workforce" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Women re-entering the workforce
                                <input name="Women re-entering the workforce" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Low Income Individuals
                                <input name="Low Income Individuals" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Individuals with Disability
                                <input name="Individuals with Disability" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Individuals 55 and older
                                <input name="Individuals 55 and older" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Single Parent
                                <input name="Single Parent" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Veteran or Veteran's Spouse
                                <input name="Veteran or Veteran's Spouse" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Individuals formerly involved in the justice system
                                <input name="Individuals formerly involved in the justice system" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Homeless individuals
                                <input name="Homeless individuals" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Native American
                                <input name="Native American" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>Other
                                <input name="Other" type="checkbox" onChange={this.handleInputChange}/>
                            </label><br/>
                        <label>If you are a VET do you intend to use the VET TEC program to pay for tuition and housing?</label><br/>
                        <select className="required" onChange={this.handleInputChange} as="select">
                            <option label="Yes"/>Yes
                            <option label="No"/>No
                        </select><br/>
                        <label>If you are a VET do you have GI BILL benefits you would like to use?</label><br/>
                        <select className="required" onChange={this.handleInputChange} as="select"> 
                            <option label="Yes"/> 
                            <option label="No"/> 
                        </select><br/>
                        <label>Are you currently authorized to work in the US?</label><br/>
                        <select className="required" as="select" onChange={this.handleInputChange}>
                            <option label="Yes"/> 
                            <option label="No"/> 
                        </select><br/>
                        <label>Are you a US citizen or permanent resident?</label><br/>
                        <select className="required" as="select" onChange={this.handleInputChange}>
                            <option label="Yes"/> 
                            <option label="No"/> 
                        </select><br/>
                        <label>I am atleast 18 years old and I have at least a HS diploma or equivalent. I understand I will be asked to provide proof of my prior educational history if I enroll.</label><br/>
                            <input onChange={this.handleInputChange} required name="acknowledgement"type="checkbox"></input><label> I acknowledge</label><br/>
                            <button onClick={(e) => this.getData(e)} variant="primary" type="submit">
                            Test Get
                            </button>
                            <button onClick={(e) => this.putData(e)} variant="primary" type="submit">
                            Test Put
                        </button><br/>
                    </form><br/>
                </div>
        )
    }
};

export default Application;