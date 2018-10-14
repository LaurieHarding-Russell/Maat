package main

import (
	"net/http"
	"fmt"
	"html"


)

const companyTargetPath = "/api/company"

func InitCompanyController() {
	http.HandleFunc(companyTargetPath, companyHandler)
}

func companyHandler(writer http.ResponseWriter, request *http.Request) {
	if request.Method == "GET" {

	} else {
		
	}
		
	fmt.Fprintf(writer, "Hello, %q", html.EscapeString(request.URL.Path))
	fmt.Fprintf(writer, "1, %q", request.Proto)
	fmt.Fprintf(writer, "2, %q", request.Method)
	fmt.Fprintf(writer, "3, %q", request.Proto)
}
