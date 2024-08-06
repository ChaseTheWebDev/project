import React from 'react';
import '../styles/PressView.css';

export default function PressView() {
    return (
        <div className='press-container'>
            <div className='press-dual-container'>
                <div className='press-box-1'>
                    <h1>Press</h1>
                </div>
                <div className='press-box-2'>
                    <blockquote>
                        “Their buildings often establish expectations and then
                        flip them, creating a sense of weightlessness and wonder.”
                    </blockquote>
                    <small>
                        – Press Source
                    </small>
                    <blockquote>
                        “Surprisingly, three of my favorite projects from last
                        year came from the same small studio: Utica. With a 
                        combination of deep research and spontaneous wit, their 
                        practice has injected new ideas into an architectural 
                        landscape that desperately needs them.”
                    </blockquote>
                    <small>-Press Source</small>
                </div>
            </div>
        </div>
    );
}