const { Router } = require("express");
const bodyParser = require("body-parser");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
} = require("../controllers/usuarios");

const router = Router();
const jsonParser = bodyParser.json();

router.get("/", usuariosGet);
router.put("/:id", usuariosPut);
router.post("/", jsonParser, usuariosPost);
router.delete("/", usuariosDelete);

module.exports = router;
