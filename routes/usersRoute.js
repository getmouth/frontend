const express = require('express');
const User = require('../models/User');
const Recipe = require('../models/Recipe');
const router = express();

//TODO: Add test later
router.patch('/:id/favourites/:favId', async (req, res) => {
    const user = await User.findById(req.params.id);
     const recipe = await Recipe.findOne({ id: req.params.favId });

    if (!user) {
        return res.status(400).json({ error: 'request failed, user does not exist '});
    }

    if(user.favourites.includes(req.params.favId)) {

        user.favourites.pull(req.params.favId);
        recipe.favorites = recipe.favorites - 1;
        await user.save();
       await recipe.save();

        res.status(200).json(user.favourites);
    
    } else {
        
        user.favourites.push(req.params.favId);
        recipe.favorites = recipe.favorites + 1;
        await user.save();
        await recipe.save();

        res.status(200).json(user.favourites);
    }
});


module.exports = router;