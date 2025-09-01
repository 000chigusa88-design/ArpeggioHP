import { Album, Disc, Song } from "@/classes/album";

const album = new Album(
    "20240302",
    "-21st Album-「21世紀に息をして」",
    "Release:2024.03.02",
    "VOCALOID STREET 8(3/2)で販売",
    [
        new Disc(
            "Disc.1",
            [
                new Song(
                    "近所に中國料理店オプーンしたし！",
                    "曲・詞：焼きとうきび",
                    ""
                ),
                new Song(
                    "マスコットガール",
                    "曲・詞：須賀 feat.初音ミク",
                    ""
                ),
                new Song(
                    "花隈千冬(成人)とジャズバーに行って情緒を狂わされたい曲",
                    "曲・詞：あでり犬 feat.花隈千冬",
                    ""
                ),
            ]
        ),
    ]
);






export const album20240302 = album;