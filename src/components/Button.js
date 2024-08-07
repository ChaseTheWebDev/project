import '../styles/Button.css';

export default function Button({ children, variant = 'light', backgroundImage, ...rest }) {
    // Determine the class name based on the variant
    const buttonClass = variant === 'dark' ? 'button-dark' : 'button';

    // Add the background image class if provided
    const imageClass = backgroundImage ? 'has-background-image' : '';

    return (
        <button className={`${buttonClass} ${imageClass}`} style={{ backgroundImage: `url(${backgroundImage})` }} {...rest}>
            {children}
        </button>
    );
}
