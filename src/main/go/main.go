package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

func main() {

	initAngular()
	//	InitCompanyController()

	srv := &http.Server{
		Addr:         "0.0.0.0:8000",
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
	}

	log.Fatal(srv.ListenAndServe())
}

func initAngular() {
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		log.Fatal(err)
	}
	http.Handle("/", http.FileServer(http.Dir(dir+"/maat.runfiles/__main__/dist")))
}
