interface Product {
    name: string;
    rating: number;
    countryOfOrigin: string;
    reviews: Array<string>;
    company: Company | null;
}