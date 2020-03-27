const service = require("../services/user-service");

class UserController {
  constructor() {}
  getAllUsers = async (req, res) => {
    try {
      const result = await service.getAllUsers();
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  getUser = async (req, res) => {
    try {
      const result = await service.getUser(req);
      console.log(result);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  addUser = async (req, res) => {
    try {
      const result = service.addUser(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const result = service.updateUser(req.body, req.params.id);
      console.log(req.body, req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const result = service.deleteUser(req.params.id);
      console.log(req.body, req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };
}

module.exports = UserController;
