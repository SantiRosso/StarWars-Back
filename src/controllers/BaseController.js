class Controller {
  constructor(service) {
    this.service = service;
  }

  findAll(req, res) {
    // this.service.findAll();
    res.status(200).json("Controlador findAll");
  }

  findById(req, res) {
    const id = req.params.id;
    // this.service.findById(id);
    res.status(200).json(`Controlador findById. ID: ${id}`);
  }

  create(req, res) {
    res.status(200).json("Controlador create");
  }

  delete(req, res) {
    res.status(200).json("Controlador delete");
  }
}

module.exports = Controller;
