import Head from 'next/head';
import Header from '@/components/Header';
import { groups } from '../../const/group/GroupList';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className='bg-mikuYellow'>
            <Head>
                <title>Arpeggio</title>
            </Head>
            <Header bgColor="bg-white" textColor="text-mikuBlack" />
            <div className="bg-white">
            <div className="bg-white text-mikuBlack flex flex-col items-center justify-left tracking-lwidest">
                <h1 className="mt-32 text-5xl font-bold">活動内容</h1>
            </div>
            <div className="bg-white text-mikuBlack flex flex-col items-center justify-center pt-10 tracking-wide">
                <h2 className='text-xl font-bold mb-10'>Arpeggioでは8つのチームで活動しています！</h2>
                {groups.map((group) => (
                    
                    <div key={group.id} className=" p-6  mb-20 w-5/6 max-w-6xl ">

                        <h3 className="text-4xl text-Blackp isPC:text-6xl font-bold mb-4">{group.name}</h3>
                        <p className="text-lg text-mikuBlack">{group.description}</p>
                    </div>
                ))}
            </div>
            <Footer bgColor="bg-white" textColor="text-mikuBlack" /> 
            </div>
        </div>
    );
}