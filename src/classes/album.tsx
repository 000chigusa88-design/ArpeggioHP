export class Album {
    id: string;
    name: string;
    date: string;
    instruction: string;
    discs: Disc[];

    constructor(id:string, name: string, date: string, instruction: string, discs: Disc[]) {
        this.id = id
        this.name = name;
        this.date = date;
        this.instruction = instruction;
        this.discs = discs;
    }
}

export class Disc {
    number: string;
    songs: Song[];

    constructor(number: string, songs: Song[]) {
        this.number = number;
        this.songs = songs;
    }
}

export class Song {
    name: string;
    maker: string;
    lyrics: string;

    constructor(name: string, maker: string, lyrics: string) {
        this.name = name;
        this.maker = maker;
        this.lyrics = lyrics;
    }
}

export class AlbumList{
    albumList:Album[]

    constructor(albumList:Album[]){
        this.albumList = albumList;
    }
}
