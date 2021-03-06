const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const router = express.Router();
const exphbs = require("express-handlebars");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const transactionsRouter = require("./routes/transactions");
const suppliesRouter = require("./routes/supplies");
const ratingsRouter = require("./routes/ratings");
const demandsRouter = require("./routes/demands");
const creditsRouter = require("./routes/credits");
const tradeRoomRouter = require("./routes/tradeRoom");
const profileRouter = require("./routes/profile");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/transactions", transactionsRouter);
app.use("/supplies", suppliesRouter);
app.use("/ratings", ratingsRouter);
app.use("/demands", demandsRouter);
app.use("/credits", creditsRouter);
app.use("/traderoom", tradeRoomRouter);
app.use("/profile", profileRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
