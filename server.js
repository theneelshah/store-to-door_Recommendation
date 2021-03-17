const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4546;

const server = app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`);
});
