export interface Author {
    id: string;
    firstName: string;
    lastName: string
}

export interface Publication {
    id: string;
    title: string;
    abstract: string;
    keywords: string;
    authors: Author[];
}