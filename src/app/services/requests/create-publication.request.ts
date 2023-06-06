import { CreateAuthorRequest } from "./create-author.request";

export interface CreatePublicationRequest {
    title: string,
    abstract: string,
    keywords: string,
    authors: CreateAuthorRequest[]
}