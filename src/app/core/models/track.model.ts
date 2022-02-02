import { ArtistModel } from "./artist.model";

export interface TrackModel {
    _id:      number;
    name:     string;
    album:    string;
    cover:    string;
    artist?:   ArtistModel;
    duration?: Duration;
    url:      string;
}

export interface Duration {
    start: number;
    end:   number;
}
