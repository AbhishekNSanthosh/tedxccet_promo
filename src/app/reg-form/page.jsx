import React from 'react'
import styles from '../../themes/form.module.css'
export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.titileRow}>
                <span className={styles.head}>TEDxCCET Volunteer Registration Form</span>
            </div>
            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>Name</span>
                    <input type="text" className={styles.short} placeholder="Enter your name" />
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Phone no.</span>
                    <input type="text" className={styles.short} placeholder="Enter your mobile no." />
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Semester</span>
                    <input type="text" className={styles.short} placeholder="Enter your semester" />
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Email</span>
                    <input type="text" className={styles.short} placeholder="Enter your Email" />
                </div>

            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>How did you come to know about TEDx ?</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Word of mouth
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Friends
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Social media
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
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
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
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
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
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
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        1 or 2 hours
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        3 or 4 hours
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        5 hours+
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
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
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Fluent
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Good
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Average
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        In progress
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>Do you have any talents or skills? If so list them</span>
                    <input type="text" className={styles.medium} placeholder="Enter your name" />
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Which one is your strongest skill?</span>
                    <input type="text" className={styles.short} placeholder="Enter your name" />
                </div>

            </div>

            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>Do you have any past achievements? eg: from school or college? List them out if you do.</span>
                    <input type="text" className={styles.long} placeholder="Enter your name" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>What do you hope to achieve by attending this event as a volunteer?</span>
                    <input type="text" className={styles.long} placeholder="Enter your name" />
                </div>
            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>As a volunteer, you may have to make slight compromises in academics in order to get things done when required. Are you willing to do so?</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
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
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
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
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        1. Curation Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        2. Technical Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        3. Design Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        4. Media and Productions Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        5. Sponsorship management Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        6. Financial Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        7. Event management Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        8. Communications and Editorial Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        9. General Volunteer Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        10. Hospitality Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        11. Reception Team
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="checkbox"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        12. Marketing Team
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.label}>Prioritize the choice according to the number. (eg: reception, curator, budget management = 11,1,6)</span>
                    <input type="text" className={styles.long} placeholder="Enter your name" />
                </div>
            </div>

            <div className={styles.radiorow}>
                <div className={styles.chooseitem}>
                    <span className={styles.label}>I understand that Use of AI in TEDx events is strictly prohibited. I am willing to take up the tasks organized by the respective Heads of the team. I will also engage in healthy relations with the fellow members and won't create any toxicity or feud.</span>

                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        Yes
                    </div>
                    <div className={styles.radioitem}>
                        <input
                            type="radio"
                            name="tedxOption"
                            value="wordOfMouth"
                            required
                            className={styles.radio}
                        />
                        No
                    </div>
                </div>
            </div>

        </div>
    )
}
