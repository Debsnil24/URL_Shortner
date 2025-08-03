package main

import (
	"log"

	"github.com/Debsnil24/URL_Shortner.git/config"
	"github.com/go-gormigrate/gormigrate/v2"
)

func main() {
	DB := config.InitDB()
	mig := gormigrate.New(DB, gormigrate.DefaultOptions, config.GetMigrations())
	if err := mig.Migrate(); err != nil {
		log.Fatalf("Migration Failed: %v", err)
	}
}