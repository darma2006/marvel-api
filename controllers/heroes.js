const db = require("../models");

const Hero = db.heroes;

// GET ALL HEROES
exports.getAll = async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.status(200).json(heroes);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

// GET HERO BY ID
exports.getSingle = async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id);

    if (!hero) {
      return res.status(404).json({
        message: "Hero not found"
      });
    }

    res.status(200).json(hero);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

// CREATE HERO
exports.createHero = async (req, res) => {

    try {

        const hero = new Hero(req.body);

        const savedHero = await hero.save();

        res.status(201).json({
    success: true,
    message: "Hero created successfully",
    hero: savedHero
});

    } catch(err){

        res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message
});

    }

};

// UPDATE HERO
exports.updateHero = async (req, res) => {
  try {

    const updatedHero = await Hero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedHero) {
      return res.status(404).json({
        message: "Hero not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Hero updated successfully",
      hero: updatedHero
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};

// DELETE HERO
exports.deleteHero = async (req,res)=>{

    try{

        const deletedHero = await Hero.findByIdAndDelete(req.params.id);

        if(!deletedHero){
            return res.status(404).json({
                message:"Hero not found"
            });
        }

        res.status(200).json({
    success: true,
    message: "Hero deleted successfully"
});

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};