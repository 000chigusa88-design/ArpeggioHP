import React from 'react';

type FooterProps = {
    bgColor: string;
    textColor: string;
};

const Footer: React.FC<FooterProps> = ({ bgColor, textColor }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${bgColor} ${textColor} text-center py-4`}>
            <p>&copy; 2024-{currentYear} VOCALOID研究会Arpeggio</p>
        </footer>
    );
};

export default Footer;