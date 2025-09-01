import { Album, Disc, Song } from "@/classes/album";

const album = new Album(
    "20141126",
    "-3rd Album- 「Arpeggio3」",
    "Release:2014.11.26~28",
    "2014年度同志社EVEにて発表・2015年度VOCALOID PARADISE 関西4にて頒布",
    [
        new Disc(
            "Disc.1",
            [
                new Song(
                    "1. 朝露唄う頃（インスト）（feat.IA）",
                    "- ほたての人",
                    ""
                ),
                new Song(
                    "2. sweet conversation（feat.GUMI）",
                    "- Yuzuru Takahashi",
                    ""
                ),
                new Song(
                    "3. isolation（feat.初音ミクAppend）",
                    "- 曲線テンプレート",
                    ""
                ),
                new Song(
                    "4. FROM DIM ROOM（feat.GUMI）",
                    "- 石川博人",
                    ""
                ),
                new Song(
                    "5. 存在意義（feat.健音テイ）",
                    "- にゃんとも",
                    ""
                ),
                new Song(
                    "6. 夕暮れジャック（feat.初音ミク）",
                    "- ワカバ",
                    ""
                ),
                new Song(
                    "7. ブルームーン（feat.初音ミク）",
                    "- ワカバ",
                    ""
                ),
                new Song(
                    "8. RTA（feat.鏡音リン）",
                    "- IS",
                    ""
                )
            ]
        ),
    ]
);

export const album20141126 = album;