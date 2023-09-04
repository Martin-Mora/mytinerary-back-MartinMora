import Tinerary from "../models/Tinerary.js";
import City from "../models/City.js";

const tineraryControllers = {
  getAllTineraries: async (req, res) => {
    const query = {};

    if (req.query.city) {
      const aux = await City.findOne({ city: req.query.city });
      query.city = aux._id;
    }

    try {
      const tineraries = await Tinerary.find(query);
      res.json(tineraries);
    } catch (error) {
      res.json({ message: error });
    }
  },

  getOnetinerary: async (req, res) => {
    try {
      const tinerary = await Tinerary.findById(req.params.id);
      res.json(tinerary);
    } catch (error) {
      res.json({ mesagge: error });
    }
  },

  createOneTinerary: async (req, res) => {
    try {
      const newTinerary = { ...req.body };
      const city = await City.findOne({ city: req.body.city });
      if (!city) {
        res.json({ message: "crea la Ciudad" });
      } else {
        newTinerary.city = city._id;
      }
      const tinerary = await Tinerary.create(newTinerary);
      await City.findOneAndUpdate(
        { _id: newTinerary.city },
        { $push: { tineraries: tinerary._id } }
      );
      res.json({ newTinerary: tinerary });
    } catch (error) {
      res.json({ mesagge: error });
    }
  },

  updateOneTinerary: async (req, res, next) => {
    const { id } = req.params;
    let tinerary;
    let success = true;
    try {
      tinerary = await Tinerary.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json({
        response: tinerary,
        success,
      });
    } catch (err) {
      success = false;
      next(err);
    }
  },

  deleteOneTinerary: async (req, res, next) => {
    const { id } = req.params;
    let tinerary;
    let success = true;
    try {
      tinerary = await tinerary.findOneAndDelete({ _id: id });
      res.json({
        response: tinerary,
        success,
      });
    } catch (err) {
      success = false;
      next(err);
    }
  },
};

export default tineraryControllers;
