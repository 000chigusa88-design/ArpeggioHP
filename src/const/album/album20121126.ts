import { Album, Disc, Song } from "@/classes/album";

const album = new Album(
    "20121126",
    "-1st Album- 「Arpeggio」",
    "Release:2012.11.26~28",
    "2012年度同志社EVEにて発表",
    [
        new Disc(
            "Disc.1",
            [
                new Song(
                    "1. inducement（feat.初音ミク）",
                    "- 曲線テンプレート",
                    ""
                ),
                new Song(
                    "2. Fall（feat.SF-A2 開発コードmiki）",
                    "- IS",
                    ""
                ),
                new Song(
                    "3. ウソツキ（feat.巡音ルカ）",
                    "- nojika",
                    ""
                ),
                new Song(
                    "4. コトノハ（feat.鏡音レン・初音ミク）",
                    "- ムサシノ",
                    ""
                ),
                new Song(
                    "5. Dog Day Afternoon　/ remix（feat.IA）",
                    "- 匿名希望（原曲 : nuzさん）",
                    ""
                ),
            ]
        ),        
    ]
);

export const album20121126 = album;