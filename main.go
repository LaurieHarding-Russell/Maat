package main

import (
	"net/http"
)

func main() {
	initAngular()
	http.ListenAndServe(":8000", nil)
}

func initAngular() {
	// FIXME, probably want to rethink this.

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./dist/index.html")
	})

	http.Handle("/dist/", http.StripPrefix("/dist/", http.FileServer(http.Dir("./public"))))

}
