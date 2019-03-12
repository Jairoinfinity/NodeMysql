var express = require("express");
var mySql = require("mysql");
var app = express();

app.set('views', 'html');
app.set('view engine', 'ejs');

var conexion = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"
});

app.listen(8081);

app.use("/:ciudad", function (req, res) {
    var sql = "SELECT * FROM temp WHERE ciudad = '" + req.params.ciudad + "'"
    console.log(sql)
    conexion.query(sql, function (err, datos) {
        if (err) {
            console.log("Error en la consulta");
        } else {
            let variables = {
                Ciudad: req.params.ciudad,
                temp: datos[0].temp,
                tempMax: datos[0].tempMax,
                tempMin: datos[0].tempMin
            }

            res.render("index", variables);
        }
    });
}
);