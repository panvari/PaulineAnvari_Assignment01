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
    const penguins =    ["1. A group of penguins in the water is called a raft, but on land they’re called a waddle!",
                        "2. Other names for a group of penguins include rookery, colony, and huddle.",
                        "3. The black and white “tuxedo” look donned by most penguin species is a clever camouflage called countershading.",
                        "4. When swimming, the black on their backs helps them blend in with the darkness of the ocean from predators viewing from above. Their white bellies help them blend in with the bright surface of the ocean when viewed by predators and prey from below.",
                        "5. Penguins may huddle together for several reasons.",
                        "6. Penguins evolved to fly underwater.",
                        "7. A penguin’s thick feathers aren’t the only way this bird stays warm.",
                        "8. Penguins live in many locations and habitats.",
                        "9. Contrary to many popular holiday cartoons, you’ll never see penguins and polar bears together in the wild.",
                        "10. Penguin feet are adapted to walk long distances."];
    res.send(penguins);
});

//creating an api route for facts about bears
app.get('/api/bears', (req, res) => {
    const bears =       ["1. Bears eat mostly meat and fish, but some bears also eat plants and insects.",
                        "2. Canada is home to nearly 60 % of the world’s polar bears.",
                        "3. The Asiatic black bear has the largest ears than other species of bears.",
                        "4. Black bears can run at the speed up to 35mph.",
                        "5. Baloo, from The Jungle Book, is a sloth bear.",
                        "6. Katmai National Park is home to approximately 4,000 Alaskan brown bears.",
                        "7. Most bears have 42 teeth.",
                        "8. Grizzly bears can remember the faces of other bears.",
                        "9. There are at least 600,000 black bears in North America.",
                        "10. About 98% of the grizzly bear population in the U.S. lives in Alaska."];
    res.send(bears);
});
