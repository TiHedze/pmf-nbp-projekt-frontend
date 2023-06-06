import { Author } from "src/app/models/author.model";

export interface PublicationDetails {
    id: string,
    title: string,
    abstract: string,
    keywords: string,
    authors: Author[];
}