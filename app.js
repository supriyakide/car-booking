const app = require("express")();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8888;
require("./v1/models/db");
app.use(bodyParser.json());

app.use("/api/v1/users", require("./v1/routes/user.route"));
app.listen(port, () => console.log(`Server is listening on port ${port}`));
