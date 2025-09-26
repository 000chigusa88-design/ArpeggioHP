import React from 'react';

type FooterProps = {
    bgColor: string;
    textColor: string;
};

const Footer: React.FC<FooterProps> = ({ bgColor, textColor }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer 
          className="text-center py-4 relative z-10"
          style={{
            backgroundColor: bgColor === 'bg-transparent' ? 'transparent' : 
                            bgColor === 'bg-white' ? 'white' : 
                            bgColor === 'bg-pink-50' ? '#fdf2f8' : 'transparent',
            color: textColor === 'text-white' ? 'white' : 'black',
            transition: 'background-color 1s ease-in-out, color 1s ease-in-out'
          }}
        >
            <div className="flex justify-center items-center space-x-4 mb-4">
                <a 
                    href="https://twitter.com/arpeggio_kouhou" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-800 text-white transition-colors duration-200 cursor-pointer"
                    style={{ pointerEvents: 'auto' }}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
            </div>
            <p className="font-medium">&copy; 2024-{currentYear} VOCALOID研究会Arpeggio</p>
        </footer>
    );
};

export default Footer;