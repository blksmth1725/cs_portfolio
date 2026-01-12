'use client';

interface MenuButtonProps {
  title: string;
  section: string;
  onClick: (section: string) => void;
  isActive?: boolean;
}

const MenuButton = ({ title, section, onClick, isActive = false }: MenuButtonProps) => {
    return (
        <button 
            className={`menu-button ${isActive ? 'active' : ''}`}
            onClick={() => onClick(section)}
        >
            {title}
        </button>
    );
};

export default MenuButton;