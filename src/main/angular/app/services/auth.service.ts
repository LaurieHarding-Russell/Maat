import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const SERVICE_URL = '../api/auth';

interface Company {
    username: string;
    password: string;
}

@Injectable()
export class CompanyService {

    constructor(private http: HttpClient) {}

    createUser() {
        return this.http
            .post(`${SERVICE_URL}/create`, {});
    }

    login() {
        return this.http
            .post(`${SERVICE_URL}/login`, {});
    }

    logout() {
        return this.http
            .get(`${SERVICE_URL}/logout`);
    }
}