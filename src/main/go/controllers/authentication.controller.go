package main

import (
	"net/http"
	// "encode/json"
)

type LoginInfo struct {
	username string
	password string
}

const authenticationTargetPath = "/api/auth/"

func InitAuthenticationController() {
	http.HandleFunc(authenticationTargetPath + "create", createUser)
	http.HandleFunc(authenticationTargetPath + "login", login)
	http.HandleFunc(authenticationTargetPath + "logout", logout)
}


func createUser(writer http.ResponseWriter, request *http.Request) {
	if request.Method == "POST" {
		loginInfo := LoginInfo{} 
		// writer.Write([]byte(request.Body))
		err := json.NewDecoder(request.Body).Decode(&loginInfo)
		writer.Write([]byte(""))
	}
}

func login(writer http.ResponseWriter, request *http.Request) {
	if request.Method == "POST" {

	}
}

func logout(writer http.ResponseWriter, request *http.Request) {
	if request.Method == "GET" {

	}
}