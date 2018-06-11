package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

func main() {
	initAngular()
	InitCompanyController()

	srv := &http.Server{
		Addr:         "0.0.0.0:8000",
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
	}

	log.Fatal(srv.ListenAndServe())
}

func initAngular() {
	http.Handle("/", http.FileServer(http.Dir("../../../dist")))
}

// Need to seperate this out somehow...
const companyTargetPath = "/api/"

func InitCompanyController() {
	r := mux.NewRouter()
	r.HandleFunc("{id}", getCompany).Methods("GET")
	r.HandleFunc("test", getCompany).Methods("GET")
	//	r.HandleFunc("/product", ArticlesHandler).get()
	http.Handle(companyTargetPath, r)
}

func createCompany(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("test"))
	return
}

func getCompany(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("test"))
	return
}
