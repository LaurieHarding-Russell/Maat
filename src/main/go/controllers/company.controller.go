package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

const companyTargetPath = "/api/"

func InitCompanyController() {
	r := mux.NewRouter()
	r.HandleFunc("{id}", getCompany).Methods("GET")
	r.HandleFunc("test", getCompany).Methods("GET")
	//	r.HandleFunc("/product", ArticlesHandler).get()
	http.Handle(companyTargetPath+"test", getCompany)
}

func createCompany(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("test"))
	return
}

func getCompany(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("test"))
	return
}
