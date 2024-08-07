import '../styles/ContactSection.css';

export default function ContactSection({ children, variant, backgroundImage }) {
    // Determine which class to apply based on the variant prop
    const className = variant === 'dark' ? 'contact-section-dark' : 'contact-section-container';

    return (
        <div
            className={`${className} ${backgroundImage ? 'contact-section-with-background' : ''}`}
            style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
        >
            {children}
        </div>
    );
}
