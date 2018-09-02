package main

import (
	"log"
	"net/http"
	"time"
)

func main() {

	InitCompanyController()
	initAngular()

	srv := &http.Server{
		Addr:         "0.0.0.0:8000",
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
	}

	log.Fatal(srv.ListenAndServe())
}

func initAngular() {
	http.Handle("/", http.FileServer(http.Dir("/app/maat.binary.runfiles/__main__/dist")))
}
