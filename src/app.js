const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const root = '/api/v1';

app.use(cors());
app.use(express.json());

///////////////////////////////////////////////////////////////////////////////////////////////////
// Routes /////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const travelDurationRoute = require('./routes/travel-duration');

///////////////////////////////////////////////////////////////////////////////////////////////////
// Middleware routes //////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
app.use(`${root}/path/travel-duration`, travelDurationRoute);

app.get('*', (_, res) => res.sendStatus(404));

///////////////////////////////////////////////////////////////////////////////////////////////////
// Starting the server ////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log("                                                                                                                                            \n" +
        "============================================================================================================================================\n" +
        "============================================================================================================================================\n" +
        "  .oooooo.                                                              ooooo      ooo                 .o8             ooooooooo   .oooo.   \n" +
        " d8P'  `Y8b                                                             `888b.     `8'                \"888            d\"\"\"\"\"\"\"8' .dP\"\"Y88b  \n" +
        "888          oooo d8b  .ooooo.   .ooooo.  oo.ooooo.   .ooooo.  oooo d8b  8 `88b.    8   .ooooo.   .oooo888   .ooooo.        .8'        ]8P' \n" +
        "888          `888\"\"8P d88' `88b d88' `88b  888' `88b d88' `88b `888\"\"8P  8   `88b.  8  d88' `88b d88' `888  d88' `88b      .8'       .d8P'  \n" +
        "888           888     888ooo888 888ooo888  888   888 888ooo888  888      8     `88b.8  888   888 888   888  888ooo888     .8'      .dP'     \n" +
        "`88b    ooo   888     888    .o 888    .o  888   888 888    .o  888      8       `888  888   888 888   888  888    .o    .8'     .oP     .o \n" +
        " `Y8bood8P'  d888b    `Y8bod8P' `Y8bod8P'  888bod8P' `Y8bod8P' d888b    o8o        `8  `Y8bod8P' `Y8bod88P\" `Y8bod8P'   .8'      8888888888 \n" +
        "                                           888                                                                                              \n" +
        "                                          o888o                                                                                             \n" +
        "============================================================================================================================================\n" +
        "============================================================================================================================================\n" +
        "                                                                                                                                            ");

    console.log(`Listening at http://localhost:${PORT}`);
});