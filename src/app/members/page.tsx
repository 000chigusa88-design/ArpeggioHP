"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { members } from '../../const/members/MemberList';

export default function MembersPage() {

  return (
    <>
      <Header bgColor="bg-black" textColor="text-white" />
      
      <div className="bg-black text-white min-h-screen">
        {/* ヒーローセクション */}
        <div className="flex flex-col items-center justify-center py-20 tracking-lwidest">
          <h1 className="text-xl md:text-3xl text-center font-bold animate-fadeInUp delay-100">
            Arpeggio メンバー
          </h1>
          <p className="text-xl mt-8 text-center mx-10">
            個性豊かなArpeggioメンバーをご紹介します
          </p>
        </div>

        {/* メンバー一覧 */}
        <div className="flex flex-col items-center justify-center pb-20 tracking-wider mx-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {members.map((member) => (
              <a 
                key={member.id} 
                href={`/members/${member.id}`}
                className="bg-transparent border border-mikuBlue text-white rounded-lg p-6 transition-transform hover:scale-105 hover:border-mikuPink block"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-mikuBlue">
                    <Image 
                      src={`/members/${member.id}.png`} 
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-mikuBlue text-lg mb-3">{member.role}</p>
                  <p className="text-sm leading-relaxed">{member.description}</p>
                  <div className="mt-4 text-mikuBlue text-sm font-semibold">
                    詳細を見る →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer bgColor="bg-black" textColor="text-white" />
    </>
  );
}
