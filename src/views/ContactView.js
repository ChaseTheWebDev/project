import React from 'react';
import '../styles/ContactView.css';

const h5Text = 'Name (required)';

export default function ContactView() {
    return (
        <div className='contact-view-container'>
            <div className='contact-dual-container'>
                <div className='contact-box-1'>
                    <h2>Let's Work Together</h2>
                    <p>
                        Further case studies available upon request.
                        Please provide some information on your
                        project or goals and we’ll move the
                        conversation on from there.
                    </p>
                    <div className='hr-container'>
                        <hr></hr>
                    </div>
                  
                    <address>
                        <p>123 Demo Street, San Diego, CA</p>
                        <p>(619) 709-5555</p>
                        <p>email@example.com</p>
                    </address>
                </div>
                <div className='contact-box-2'>
                    <form className='contact-form'>
                        <h5>{h5Text}</h5>
                        <div className='full-name-container'>
                            <label>First Name (required)
                                <input type='text' required />
                            </label>
                            <label>Last Name (required)
                                <input type='text' required />
                            </label>
                        </div>
                        <label>Email (required)
                            <input type='text' required />
                        </label>
                        <label>Subject (required)
                            <input type='text' required />
                        </label>
                        <label>Message (required)
                            <textarea required />
                        </label>
                        <button className='contact-button' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}