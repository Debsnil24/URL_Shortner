package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Handler struct {
	DB *gorm.DB
}

func NewHandler(db *gorm.DB) *Handler {
	return &Handler{DB: db}
}

func (h *Handler) TestHandler(c *gin.Context) {
	var count int

	query := ` 
		SELECT COUNT(*) 
		FROM information_schema.tables 
		WHERE table_schema = 'public';
	`

	if err := h.DB.Raw(query).Scan(&count).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"count": count,
	})
}
