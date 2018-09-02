package main

import (
	"net/http"
	"fmt"
	"html"


)

const companyTargetPath = "/api/v1/company"

func InitCompanyController() {
	http.HandleFunc(companyTargetPath, companyHandler)
}

func companyHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
}
