package main

import (
	"log"
	"net/http"
)

func main() {
	initAngular()
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func initAngular() {
	http.Handle("/", http.FileServer(http.Dir("./dist")))
}
