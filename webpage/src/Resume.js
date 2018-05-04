import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';

class Resume extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "Joseph Amedeo",
            address: "34 Mallory Road",
            city: "Watertown",
            state: "CT",
            zip: "06795",
            phone: "203-598-5641",
            email: "joseph.p.amedeo@gmail.com",
            profession: "Software Engineer",
            jobs: [
                {
                    title: "TFDP - Software Development",
                    company: "Travelers",
                    startDate: "January 2018",
                    endDate: "Present",
                    Description: "At this prosition, I am a feature team member of the Agile Release Train in the Bond and Specialy Insurance - Claim department. I am tasked with implementing new features to a variety of applications and tools, such as ASP.NET Core microservices, .NET MVC web applications, Legacy desktop applications, SQLServer store procedures, and batch scripting processes."
                }
            ],
            skills: {
                languages: [
                    "C#",
                    "Java",
                    "JavaScript",
                    "SQL/T-SQL",
                ],
                frameworks: [
                    "ASP.Net Core",
                    "Nodejs",
                    "Reactjs",
                    "Jquery",
                    "Bootstrap"
                ],
                other: [
                    "Batch Scripting",
                    "Pivitol Cloud Foundry",
                    "Jenkins",
                    "HTML/CSS Styling"
                ]
            },
            education: [
                {
                    name: "University of Connecticut School of Engineering",
                    degree: "BS",
                    field: "Computer Science",
                    startDate: "August 2013",
                    endDate: "December 2017"
                }
            ],
            projects: [
                {
                    name: "My Website",
                    link: "https://github.com/JoeAmedeo/Webpage",
                    description: "This is simply my personal website. This will be used for making programs I create on my personal time to be available for the public, along with tutorials of how to create and use them."
                },
                {
                    name: "Mobile Tank Monitor",
                    link: "https://github.com/JoeAmedeo/Tank_Monitor",
                    description: "Inspired by the IoT, and the desire of reptile owner, the Tank Monitor App exists to make monitoring a given environment easier and more mobile. This app utilizes a a raspberry pi as an embedded device, Python scripts for utilizing and collecting data from our pi accessories, a Nodejs API, MariaDB database, and Android application for data checking on the go."
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.profession}</h2>
                <p className="centered">{this.state.address + " " + this.state.city + " " + this.state.state + " " + this.state.zip + " | " + this.state.email + " | " + this.state.phone}</p>
                <h2>Education</h2>
                {this.state.education.map( (ed) =>
                    <div>
                        <div className="inline">
                            <div className="left">
                                <h3>{ed.name}</h3>
                                <h4>{ed.degree + " in " + ed.field}</h4>
                            </div>
                            <div className="right">
                                <h4>{ed.startDate + " to " + ed.endDate}</h4>
                            </div>
                        </div>
                        
                    </div>
                )}
                <h2>Experience</h2>
                {this.state.jobs.map( (job) =>
                    <div>
                        <div className="inline">
                            <div className="left">
                                <h3>{job.title}</h3>
                                <h4>{job.company}</h4>
                            </div>
                            <div className="right">
                                <h4>{job.startDate + " to " + job.endDate}</h4>
                            </div>
                        </div>
                        <p>{job.Description}</p>
                    </div>
                    
                )}
                <h2>Skills</h2>
                <div className="inline">
                    <h3 className="left">Programming Languages:</h3>
                    <h4 className="right">
                    {this.state.skills.languages.map( (language) =>
                        language + " | "
                    )}
                    </h4>
                </div>
                <div className="inline">
                    <h3 className="left">Frameworks:</h3>
                    <h4 className="right">
                    {this.state.skills.frameworks.map( (framework) =>
                        framework + " | "
                    )}
                    </h4>
                </div>
                <div className="inline">
                    <h3 className="left">Other Skills:</h3>
                    <h4 className="right">
                    {this.state.skills.other.map( (other) =>
                        other + " | "
                    )}
                    </h4>
                </div>
                <h2>Projects</h2>
                {this.state.projects.map( (project) =>
                    <div>
                        <div className="inline">
                            <h3 className="left">{project.name}</h3>
                            <h4 className="right"><a href={project.link}>{project.link}</a></h4>
                        </div>
                        <p>{project.description}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Resume;