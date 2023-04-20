import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './CreditPlanCard.module.css'
function CreditPlanCard() {

    const navigate = useNavigate();
    const successPaymentHandler = (paymentResult) => {
    navigate('/paypalPayment')


    }
    return (
        <div className={styles.creditCardPlan}>
            <div className={styles.cardTitle}>
                <span>Credit Plans</span>
            </div>
            <div className={styles.cardContainer} onClick={successPaymentHandler}>
                <div className={styles.card} >
                    <h1>50 Credits</h1>
                    <p>Unused credits will expire in 1 Month</p>
                    <br />
                    <hr />
                    <br />
                    <ul>
                        <li> Approx ₹14/Credit </li>
                        <li>

                            1 Credit per year

                        </li>
                        <li>
                            Paid Credits

                        </li>
                        <li>

                            Can be used to activate Analytics plan
                        </li>

                        <li>

                            Can be used for all Models
                        </li>
                    </ul>
                    <hr />
                    <span className={styles.price}>

                        <h1>₹999</h1>
                        <p>(Incl. 18% GST)</p>

                    </span>
                </div>
                <div className={styles.card}>
                    <h1>100 Credits</h1>
                    <p>Unused credits will expire in 1 Month</p>
                    <br />

                    <hr />
                    <br />
                    <ul>
                        <li> Approx ₹14/Credit </li>
                        <li>

                            1 Credit per year

                        </li>
                        <li>
                            Paid Credits

                        </li>
                        <li>

                            Can be used to activate Analytics plan
                        </li>

                        <li>
                            Can be used for all Models
                        </li>
                    </ul>
                    <hr />
                    <span className={styles.price}>

                        <h1>₹1599</h1>
                        <p>(Incl. 18% GST)</p>

                    </span>

                </div>
                <div className={styles.card}>
                    <h1>150 Credits</h1>
                    <p>Unused credits will expire in 1 Month</p>
                    <br />

                    <hr />
                    <br />
                    <ul>
                        <li> Approx ₹14/Credit </li>
                        <li>

                            1 Credit per year

                        </li>
                        <li>
                            Paid Credits

                        </li>
                        <li>

                            Can be used to activate Analytics plan
                        </li>

                        <li>
                            Can be used for all Models
                        </li>
                    </ul>
                    <hr />
                    <span className={styles.price}>

                        <h1>₹1999</h1>
                        <p>(Incl. 18% GST)</p>

                    </span>

                </div>
                <div className={styles.card}>
                    <h1>250 Credits</h1>
                    <p>Unused credits will expire in 1 Month</p>
                    <br />
                    <hr />
                    <br />
                    <ul>
                        <li> Approx ₹14/Credit </li>
                        <li>
                            1 Credit per year
                        </li>
                        <li>
                            Paid Credits
                        </li>
                        <li>
                            Can be used to activate Analytics plan
                        </li>

                        <li>
                            Can be used for all Models
                        </li>
                    </ul>
                    <hr />
                    <span className={styles.price}>

                        <h1>₹2999</h1>
                        <p>(Incl. 18% GST)</p>

                    </span>

                </div>
            </div>
        </div>
    )
}

export default CreditPlanCard