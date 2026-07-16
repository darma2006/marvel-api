module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      releaseYear: {
        type: Number,
        required: true,
      },
      director: {
        type: String,
        required: true,
      },
      phase: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      boxOffice: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("Movie", schema);
};