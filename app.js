const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8888;

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "x-token");
  next();
});

require("./v1/models/db");
app.use(bodyParser.json());

app.use("/api/v1/users", require("./v1/routes/user.route"));
app.use("/api/v1/customers", require("./v1/routes/customer.route"));
app.use("/api/v1/auth", require("./v1/routes/auth.route"));
app.listen(port, () => console.log(`Server is listening on port ${port}`));
