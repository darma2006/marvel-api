module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      realName: {
        type: String,
        required: true,
      },
      team: {
        type: String,
        required: true,
      },
      power: {
        type: String,
        required: true,
      },
      actor: {
        type: String,
        required: true,
      },
      firstAppearance: {
        type: Number,
        required: true,
      },
      isAlive: {
        type: Boolean,
        required: true,
      },
      universe: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("Hero", schema, "heroes");
};