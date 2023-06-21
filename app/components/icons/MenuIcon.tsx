import { CustomableIcon } from '@/utils/interfaces';

function MenuIcon({ className }: CustomableIcon) {
    return (
        <svg
            fill='none'
            stroke='currentColor'
            strokeWidth={1.5}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            className={className}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
            />
        </svg>
    );
}

export default MenuIcon;
