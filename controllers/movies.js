const db = require("../models");

const Movie = db.movies;

// GET ALL MOVIES
exports.getAll = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// GET MOVIE BY ID
exports.getSingle = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// CREATE MOVIE
exports.createMovie = async (req, res) => {

    /*  #swagger.parameters['body'] = {
        in: 'body',
        description: 'Movie information',
        required: true,
        schema: {
            title: 'Iron Man',
            releaseYear: 2008,
            director: 'Jon Favreau',
            phase: 1,
            duration: 126,
            rating: 7.9,
            boxOffice: '$585.8 million'
        }
    } */

    try {

        const movie = new Movie(req.body);

        const savedMovie = await movie.save();

        res.status(201).json({
            success: true,
            message: "Movie created successfully",
            movie: savedMovie
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// UPDATE MOVIE
exports.updateMovie = async (req, res) => {

    /*  #swagger.parameters['body'] = {
        in: 'body',
        description: 'Updated movie information',
        required: true,
        schema: {
            title: 'Iron Man',
            releaseYear: 2008,
            director: 'Jon Favreau',
            phase: 1,
            duration: 126,
            rating: 7.9,
            boxOffice: '$585.8 million'
        }
    } */

    try {

        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedMovie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Movie updated successfully",
            movie: updatedMovie
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// DELETE MOVIE
exports.deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

    if (!deletedMovie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};