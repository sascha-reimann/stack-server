require("dotenv").config();
const fs = require('fs');
const path = "db/init.sql";



const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.DATABASE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to database.');
});
module.exports = {
    initDb: () => {
        let dataSql;
        try {
            dataSql = fs.readFileSync(path, "utf8");
            console.log("File content:", dataSql);
        } catch (err) {
            return console.error(err.message);
        }

        const dataArr = dataSql.toString().split(');');
        db.serialize(
            () => {
                db.run('PRAGMA foreign_keys=OFF;');
                db.run('BEGIN TRANSACTION;');

                dataArr.forEach((query) => {
                    if (query) {
                        query += ');';
                        db.run(query, (err) => {
                            if (err) throw err;
                        });
                    }
                });

                db.run('COMMIT;');
            }
        );

        db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Closed the database connection.');
        });
    }
}