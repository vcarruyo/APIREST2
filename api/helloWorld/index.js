/**
* Hello World Endpoint
*/

const { Router } = require("express");
const controller = require("./helloWorld.controller"); 

const router = new Router ();

//All verbs 
router.get("/", controller.index);

/**
*Another verbs to use
router.post("/", controler.create);
router.put("/:id", controler.update);
router.get("/:id", controler.show);
router.delete("/:id", controler.destroy);
*/

module.exports = router; 