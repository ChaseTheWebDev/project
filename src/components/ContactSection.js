import '../styles/ContactSection.css';

export default function ContactSection({ children, background = 'dark' }) {
    return (
        <section aria-label='Contact Us Section'>
            <div className={`contact-section-container ${background}`}>
                <div className='container-1400'>
                    {children}
                </div>
            </div>
        </section>
    );
}
