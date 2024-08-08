import '../styles/ContactSection.css';

export default function ContactSection({ children, background = 'dark' }) {
    return (
        <div
            className={`contact-section-container ${background}`}
        >
            {children}
        </div>
    );
}
