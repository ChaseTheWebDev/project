import React from 'react';
import '../styles/OurTeamView.css';

export default function OurTeamView() {
    return (
        <div className='our-team-container'>
            <div className='card-container'>
                <div className='member-card'>
                    <div className='member-image-1'></div>
                    <h3 className='member-name'>First Name Last Name</h3>
                    <p className='member-info'>
                        It all begins with an idea. Maybe you want to launch a
                        business. Maybe you want to turn a hobby into something
                        more. Or maybe you have a creative project to share with
                        the world. Whatever it is, the way you tell your story
                        online can make all the difference.
                    </p>
                </div>
                <div className='member-card'>
                    <div className='member-image-2'></div>
                    <h3 className='member-name'>First Name Last Name</h3>
                    <p className='member-info'>
                        It all begins with an idea. Maybe you want to launch a
                        business. Maybe you want to turn a hobby into something
                        more. Or maybe you have a creative project to share with
                        the world. Whatever it is, the way you tell your story
                        online can make all the difference.
                    </p>
                </div>
            </div>
        </div>
    );
}
