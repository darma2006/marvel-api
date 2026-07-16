module.exports = (mongoose) => {

    const schema = mongoose.Schema(
        {
            name: String,
            realName: String,
            team: String,
            power: String,
            firstAppearance: String,
            isAlive: Boolean,
            universe: String,
            actor: String
        },
        {
            timestamps: true
        }
    );

    return mongoose.model("heroes", schema);

};