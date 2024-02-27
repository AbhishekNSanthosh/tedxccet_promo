"use client"

import React, { useState } from 'react'
import styles from '../../themes/form.module.css'
import axios from 'axios'
export default function page() {
    const [name, setName] = useState("");
    const [mobNo, setMobNo] = useState("");
    const [semester, setSemester] = useState("");
    const [email, setEmail] = useState("");
    const [isAttended, setIsAttended] = useState("");
    const [willingToCommunicateWithYourFellow, setIwillingToCommunicateWithYourFellow] = useState("");
    const [timeOnTheInternet, setTimeOnTheInternet] = useState("");
    const [speakingSkills, setSpeakingSkills] = useState("");
    const [skills, setSkills] = useState("");
    const [strongestSkill, setstrongestSkill] = useState("");
    const [achievement, setAchievement] = useState("");
    const [achieveByAttending, setAchieveByAttending] = useState("");
    const [compromisesInAcademics, setCompromisesInAcademics] = useState("");
    const [handlePressure, setHandlePressure] = useState("");
    const [team, setTeam] = useState([]);
    const [priority, setPriority] = useState("");
    const [terms, setTerms] = useState("");
    const [howDidYouCome, setHowDidYouCome] = useState("");


    console.log(name, mobNo, semester, email, isAttended,
        willingToCommunicateWithYourFellow, timeOnTheInternet, speakingSkills, skills,
        strongestSkill, achieveByAttending, achievement,
        compromisesInAcademics,
        handlePressure, team, priority, terms, howDidYouCome)


    const handleCheckboxChange = (value) => {
        console.log(value)
        if (team.includes(value)) {
            // If already selected, remove it from the array
            setTeam(team.filter((team) => team !== value));
        } else {
            // If not selected, check if the limit has been reached
            if (team.length < 3) {
                setTeam([...team, value]);
            }
        }
    };
    console.log(team)

    const handleSubmit = async (e) => {
        // e.preventDefault();
        try {
console.log("called")
            const response = await axios.post(
                "https://sheet.best/api/sheets/db4133c3-e210-41d4-a051-2f9302cd6d2f",
                {
                    name, mobNo, semester, email, isAttended,
                    willingToCommunicateWithYourFellow, timeOnTheInternet, speakingSkills, skills,
                    strongestSkill, achieveByAttending, achievement,
                    compromisesInAcademics,
                    handlePressure, team, priority, terms, howDidYouCome

                }
            );

            console.log("Data sent successfully!", response.data);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };
    return (
        <div className={styles.container}>
            <form action="">
            <div className={styles.titileRow}>
                <span className={styles.head}>TEDxCCET Volunteer Registration Form</span>
            </div>
            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>Name</span>
                    <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} className={styles.short} placeholder="Enter your name" />
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Phone no.</span>
                    <input onChange={(e) => {
                        setMobNo(e.target.value)
                    }} type="text" className={styles.short} placeholder="Enter your mobile no." />
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Semester</span>
                    <input onChange={(e) => {
                        setSemester(e.target.value)
                    }} type="text" className={styles.short} placeholder="Enter your semester" />
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Email</span>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} type="text" className={styles.short} placeholder="Enter your Email" />
                </div>

            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>How did you come to know about TEDx ?</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="wordOfMouth"
                            value="wordOfMouth"
                            
                            onChange={(e) => {
                                setHowDidYouCome(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Word of mouth
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="wordOfMouth"
                            value="Friends"
                            
                            onChange={(e) => {
                                setHowDidYouCome(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Friends
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="wordOfMouth"
                            value="Social media"
                            
                            onChange={(e) => {
                                setHowDidYouCome(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Social media
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="wordOfMouth"
                            value="Just recently"
                            
                            onChange={(e) => {
                                setHowDidYouCome(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Just recently
                    </div>
                </div>

            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>Have you attended any TEDx event before?</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="attended"
                            
                            value="Yes"
                            onChange={(e) => {
                                setIsAttended(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="attended"
                            value="No"
                            onChange={(e) => {
                                setIsAttended(e.target.value)
                            }}
                            
                            className={styles.radio}
                        />
                        No
                    </div>
                </div>
            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>Are you willing to communicate with your fellow volunteers and let them know about the progress incase of their absence?</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="willing"
                            value="Yes"
                            
                            onChange={(e) => {
                                setIwillingToCommunicateWithYourFellow(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="willing"
                            value="No"
                            
                            onChange={(e) => {
                                setIwillingToCommunicateWithYourFellow(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        No
                    </div>
                </div>
            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>How often do you spend your time on the Internet (on a daily basis) ?</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="time"
                            value="1 or 2 hours"
                            
                            onChange={(e) => {
                                setTimeOnTheInternet(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        1 or 2 hours
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="time"
                            value="3 or 4 hours"
                            
                            onChange={(e) => {
                                setTimeOnTheInternet(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        3 or 4 hours
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="time"
                            value="5 hours+"
                            
                            onChange={(e) => {
                                setTimeOnTheInternet(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        5 hours+
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="time"
                            value="24 hours"
                            
                            onChange={(e) => {
                                setTimeOnTheInternet(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        24 hours
                    </div>
                </div>
            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>How good are your speaking skills? (English)</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="Fluent"
                            
                            onChange={(e) => {
                                setSpeakingSkills(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Fluent
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="Good"
                            
                            onChange={(e) => {
                                setSpeakingSkills(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Good
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="Average"
                            
                            onChange={(e) => {
                                setSpeakingSkills(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Average
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="In progress"
                            
                            onChange={(e) => {
                                setSpeakingSkills(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        In progress
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>Do you have any talents or skills? If so list them</span>
                    <input type="text" className={styles.medium} placeholder="Enter your skills" onChange={(e) => {
                        setSkills(e.target.value)
                    }} />
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Which one is your strongest skill?</span>
                    <input type="text" className={styles.short} placeholder="Enter your strongest skill" onChange={(e) => {
                        setstrongestSkill(e.target.value)
                    }} />
                </div>

            </div>

            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>Do you have any past achievements? eg: from school or college? List them out if you do.</span>
                    <input type="text" className={styles.long} placeholder="Enter your past achievements" onChange={(e) => {
                        setAchievement(e.target.value)
                    }} />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>What do you hope to achieve by attending this event as a volunteer?</span>
                    <input type="text" className={styles.long} placeholder="Enter your answer" onChange={(e) => {
                        setAchieveByAttending(e.target.value)
                    }} />
                </div>
            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>As a volunteer, you may have to make slight compromises in academics in order to get things done when . Are you willing to do so?</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="compromise"
                            value="Yes"
                            
                            onChange={(e) => {
                                setCompromisesInAcademics(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="compromise"
                            value="No"
                            
                            onChange={(e) => {
                                setCompromisesInAcademics(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        No
                    </div>
                </div>
            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>Are you able to handle pressure and finish the work assigned to you before the deadline?</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="pressure"
                            value="Yes"
                            
                            onChange={(e) => {
                                setHandlePressure(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="pressure"
                            value="No"
                            
                            onChange={(e) => {
                                setHandlePressure(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        No
                    </div>
                </div>
            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>Choose which team you would like to enter as a volunteer for. (Maximum 3) </span>

                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Curation_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        1. Curation Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Technical_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        2. Technical Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value=" Design_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        3. Design Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Media_and_Productions_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        4. Media and Productions Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Sponsorship_management_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        5. Sponsorship management Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Financial_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        6. Financial Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Event_management_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        7. Event management Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Communications_and_Editorial_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        8. Communications and Editorial Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="General_Volunteer_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        9. General Volunteer Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Hospitality_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        10. Hospitality Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Reception_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        11. Reception Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="Marketing_Team"
                            
                            className={styles.radio}
                            onChange={(e) => {
                                handleCheckboxChange(e.target.value)
                            }}
                        />
                        12. Marketing Team
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>Prioritize the choice according to the number. (eg: reception, curator, budget management = 11,1,6)</span>
                    <input type="text" className={styles.long} placeholder="Arrange your priority" onChange={(e) => {
                        setPriority(e.target.value)
                    }} />
                </div>
            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>I understand that Use of AI in TEDx events is strictly prohibited. I am willing to take up the tasks organized by the respective Heads of the team. I will also engage in healthy relations with the fellow members and won't create any toxicity or feud.</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="understand"
                            value="Yes"
                            
                            onChange={(e) => {
                                setTerms(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="understand"
                            value="No"
                            
                            onChange={(e) => {
                                setTerms(e.target.value)
                            }}
                            className={styles.radio}
                        />
                        No
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.item}>
                    <button onClick={() => {
                        handleSubmit(e)
                    }} className={styles.submit}>Submit</button>
                </div>
            </div>
            </form>
        </div>
    )
}
