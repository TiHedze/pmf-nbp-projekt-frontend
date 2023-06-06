import { CreateAuthorRequest } from "./create-author.request";

export interface UpdatePublicationRequest {
    id: string,
    title: string,
    abstract: string,
    keywords: string,
    authors: CreateAuthorRequest[]
}