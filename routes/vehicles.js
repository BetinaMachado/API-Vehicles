const express = require("express");
const router = express.Router();
const vehiclesCtrl = require("../controllers/vehicles");

//cadastrar um veículo
router.post("/", vehiclesCtrl.createOne);

//buscar todos os veículos
router.get("/", vehiclesCtrl.getAll);

//buscar um veículo
router.get("/:id", vehiclesCtrl.getOne);

//atualizar um veículo
router.put("/:id", vehiclesCtrl.updateOne);

//remover um veículo
router.delete("/:id", vehiclesCtrl.removeOne);


module.exports = router;