// CSS Modules
import myStyles from './Badge.module.css';

export default function Badge({ label, size = 'medium' }) {
    // map size prop to the corresponding class
    const sizeClass =
        size === 'small'
            ? myStyles.small
            : size === 'large'
                ? myStyles.large
                : '';

    return (
        <span className={`${myStyles.root} ${sizeClass}`}>
            {label}
        </span>
    );
}