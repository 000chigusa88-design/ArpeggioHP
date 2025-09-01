import { Album, Disc, Song } from "@/classes/album";

const album = new Album(
    "20131126",
    "-2nd Album- 「Arpeggio2」",
    "Release:2013.11.26~28",
    "2013年度同志社EVEにて発表",
    [
        new Disc(
            "Disc.1",
            [
                new Song(
                    "1. WAVE / cover（feat.春歌ナナ）",
                    "- 7*7（原曲 : nikiさん）",
                    ""
                ),
                new Song(
                    "2. ダンスナンバーを共に / cover（feat.春歌ナナ）",
                    "- 7*7（原曲 : ナナホシ管弦楽団さん）",
                    ""
                ),
                new Song(
                    "3. Wobble NOiSE（feat.初音ミク）",
                    "- 曲線テンプレート",
                    ""
                ),
                new Song(
                    "4. 夕暮れジャック（feat.初音ミク）",
                    "- ワカバ",
                    ""
                ),
                new Song(
                    "5. 流星ハンター Piano Arrangement（instrumental）",
                    "- 希崎P（原曲 : 40mPさん）",
                    ""
                ),
            ]
        ),        
    ]
);

export const album20131126 = album;