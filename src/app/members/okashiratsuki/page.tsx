"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

// 御頭付きさんの詳細データ
const memberData = {
  id: "okashiratsuki",
  name: "御頭付き",
  role: "映像班",
  description: "映像班副班長，就活に苦しんでます",
  // 詳細情報
  details: {
    socialLinks: [{}],
  },
};

export default function okashiratsukiPage() {
  return (
    <>
      {/* ヘッダー は必ず先頭に書く */}
      <Header bgColor="bg-black" textColor="text-white" />

      {/* メインコンテンツは自由な内容・デザインで作成していいよ */}
      <div className="bg-black text-white min-h-screen">
        <div className="flex flex-col items-center justify-center py-20 ">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-mikuBlue">
            <Image
              src={`/members/${memberData.id}.png`}
              alt={memberData.name}
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-5xl text-center font-bold animate-fadeInUp delay-100 mb-4">
            {memberData.name}
          </h1>
          <p className="text-xl text-mikuBlue font-semibold mb-2">
            {memberData.role}
          </p>
          <p className="text-lg text-center mx-10 max-w-2xl">
            {memberData.description}
          </p>
        </div>
      </div>

      {/* フッター は必ず最後に書く */}
      <Footer bgColor="bg-black" textColor="text-white" />
    </>
  );
}
