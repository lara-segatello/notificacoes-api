const express = require("express");
const router = express.Router();
const EventoController = require("../controllers/EventosController");


router.get("/", EventoController.index );
router.get("/:id", EventoController.show);
router.post("/", EventoController.store);
router.put("/:id", EventoController.update);
router.delete("/:id", EventoController.destroy);