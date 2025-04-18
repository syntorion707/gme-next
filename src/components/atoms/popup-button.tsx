'use client';
const PopupButton = ({ text, handleClick }: { text: string; handleClick: () => void }) => {
    return (
        <button
            className='text-button-accent hover:text-button-accent-secondary cursor-pointer py-1.5 pr-1.5 pl-0.5 font-medium hover:underline'
            onClick={handleClick}>
            {text}
        </button>
    );
};

export default PopupButton;
