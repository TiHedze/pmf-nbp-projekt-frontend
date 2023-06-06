import { Author, Publication } from "src/app/models/author.model";

export interface AuthorDetails {
    author: Author,
    publications: Publication[],
    relatedAuthors: Author[]
}