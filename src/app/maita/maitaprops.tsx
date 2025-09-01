import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DownloadIcon from '@mui/icons-material/Download';
import { Maita } from '@/classes/maita';

type MaitaProps = {
    maita: Maita;
    onDownload: (id: string, name: string, description: string,downloadUrl:string) => void;
};

export const MaitaIntroductionRow: React.FC<MaitaProps> = ({ maita, onDownload }) => {
    const [borderColor, setBorderColor] = useState(maita.colors[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [designImageExists, setDesignImageExists] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBorderColor(prevColor => {
                const currentIndex = maita.colors.indexOf(prevColor);
                const nextIndex = (currentIndex + 1) % maita.colors.length;
                return maita.colors[nextIndex];
            });
        }, 400);

        return () => clearInterval(intervalId);
    }, [maita.colors]);

    // Check if the design image exists
    useEffect(() => {
        const checkImageExistence = async () => {
            try {
                const response = await fetch(`/maita/${maita.id}/design.png`);
                if (response.ok) {
                    setDesignImageExists(true);
                }
            } catch (error) {
                setDesignImageExists(false); // Set false if there's an error
            }
        };
        checkImageExistence();
    }, [maita.id]);

    return (
        <div className="flex flex-col my-16 items-center justify-center py-4 tracking-wider">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-x-4 sm:space-y-0">
                {/* 立ち絵画像 */}
                <Image
                    src={`/maita/${maita.id}/portrait.png`}
                    alt={`${maita.name}の立ち絵`}
                    className="w-48 h-auto object-contain"
                    width={192}
                    height={0}
                    layout="intrinsic"
                />

                <div className="flex flex-col items-start justify-center space-y-4">
                    <h3 className="text-2xl font-bold">{maita.name}</h3>
                    <p className="text-xl">{maita.description}</p>
                    <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                        <div className="flex flex-col items-start justify-center space-y-4">
                            {maita.demoSong && (
                                <button
                                    onClick={() => window.open(maita.demoSong, '_blank')}
                                    className="text-base font-bold px-6 py-3 rounded-lg border-2 border-transparent bg-maitaPurple text-white hover:bg-maitaHoverPurple flex items-center"
                                    style={{ width: '100%' }}
                                >
                                    <MusicNoteIcon className="mr-2" />
                                    デモソング
                                </button>
                            )}

                            {maita.downloadUrl && (
                                <button
                                    onClick={() => onDownload(maita.id, maita.name, maita.description,maita.downloadUrl)}
                                    className={"text-base font-bold px-6 py-3 rounded-lg border-2 border-transparent transition-colors bg-maitaPurple text-white hover:bg-maitaHoverPurple"}
                                    style={{ width: '100%' }}
                                >
                                    <>
                                        <DownloadIcon />
                                        ダウンロード
                                    </>
                                </button>
                            )}
                            {maita.copyright && (
                                <p className="text-sm text-gray-500 mt-2">Designed by {maita.copyright}</p>
                            )}
                        </div>

                        {designImageExists && (
                            <div className="relative">
                                <div className="absolute inset-0 rounded-xl transform rotate-20"></div>

                                <Image
                                    onClick={toggleModal}
                                    src={`/maita/${maita.id}/design.png`}
                                    alt={`${maita.name}のデザイン画像`}
                                    width={328}
                                    height={246}
                                    className={`relative ml-10 object-cover transform rounded-2xl rotate-20 border-4 shadow-2xl hover:scale-105 ${borderColor}`}
                                    style={{ transition: 'all 0.5s ease-in-out' }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
                    <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-full max-h-full overflow-auto">
                        <button
                            onClick={toggleModal}
                            className="absolute top-3 left-4 text-black hover:text-gray-700 transition-colors"
                        >
                            閉じる
                        </button>
                        <span className="absolute bottom-2 right-2 text-gray-500 ">
                            Designed by {maita.copyright}
                        </span>
                        <Image
                            src={`/maita/${maita.id}/design.png`}
                            alt={`${maita.name}のデザイン画像`}
                            width={800}
                            height={600}
                            className="object-contain m-8"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};