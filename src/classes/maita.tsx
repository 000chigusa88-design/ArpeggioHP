class Maita {
    id: string;
    name: string;
    description: string;
    copyright: string;
    colors: string[];
    demoSong: string;
    downloadUrl: string;

    constructor(
        id: string,
        name: string,
        description: string,
        copyright: string,
        colors: string[],
        demoSong: string,
        downloadUrl: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.copyright = copyright;
        this.colors = colors;
        this.demoSong = demoSong;
        this.downloadUrl = downloadUrl;
    }
}

class MaitaProfileData {
    label: string;
    value: string;

    constructor(label: string, value: string) {
        this.label = label;
        this.value = value;
    }
}

export { Maita, MaitaProfileData }