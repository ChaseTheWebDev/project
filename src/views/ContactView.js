import React from 'react';
import '../styles/ContactView.css';

export default function ContactView() {
    return (
        <div className='contact'>
            <div className='dual-container-1400'>
                <div className='contact-box-1'>
                    <h2>Let's Work Together</h2>
                    <p>
                        Further case studies available upon request.
                        Please provide some information on your
                        project or goals and we’ll move the
                        conversation on from there.
                    </p>
                    <div className='hr-container'>
                        <hr />
                    </div>
                    <address>
                        <p>1050 Chase Street, San Diego, CA</p>
                        <p>(619) 709-5555</p>
                        <p>chase@gmail.com</p>
                    </address>
                </div>
                <div className='contact-box-2'>
                    <form className='contact-form'>
                        <div className='full-name-container'>
                            <label>
                                First Name (required)
                                <input type='text' required />
                            </label>
                            <label>
                                Last Name (required)
                                <input type='text' required />
                            </label>
                        </div>
                        <label>
                            Email (required)
                            <input type='email' required />
                        </label>
                        <label>
                            Subject (required)
                            <input type='text' required />
                        </label>
                        <label>
                            Message (required)
                            <textarea required />
                        </label>
                        <button className='contact-button' type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
