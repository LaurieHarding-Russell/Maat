import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginInfo } from "../model/loginInfo";

const SERVICE_URL = '../api/auth';

interface Company {
    username: string;
    password: string;
}

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    createUser(loginInfo: LoginInfo) {
        return this.http
            .post(`${SERVICE_URL}/create`, loginInfo);
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