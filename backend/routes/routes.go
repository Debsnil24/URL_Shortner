package routes

import (
	"github.com/Debsnil24/URL_Shortner.git/config"
	"github.com/Debsnil24/URL_Shortner.git/handler"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine) {
	h := handler.NewHandler(config.DB)

	api := router.Group("/api")
	{
		api.GET("/test", h.TestHandler)
	}
}
