//requiring express
const express = require('express');

//initializing the express app
const app = express();

//specifying port to listen on localhost:9000
const port = 9000;

//running express http server on specified port
app.listen(port, () => {
    console.log("Listening on port", port);
});

//creating an api route for facts about penguins 
app.get('/api/penguins', (req, res) => {
    const penguins =    ["A group of penguins in the water is called a raft, but on land they’re called a waddle!",
                        "Other names for a group of penguins include rookery, colony, and huddle.",
                        "The black and white “tuxedo” look donned by most penguin species is a clever camouflage called countershading.",
                        "When swimming, the black on their backs helps them blend in with the darkness of the ocean from predators viewing from above. Their white bellies help them blend in with the bright surface of the ocean when viewed by predators and prey from below.",
                        "Penguins may huddle together for several reasons.",
                        "Penguins evolved to fly underwater.",
                        "A penguin’s thick feathers aren’t the only way this bird stays warm.",
                        "Penguins live in many locations and habitats.",
                        "Contrary to many popular holiday cartoons, you’ll never see penguins and polar bears together in the wild.",
                        "Penguin feet are adapted to walk long distances."];
    res.send(penguins);
});
