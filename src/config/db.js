const mysql = require("mysql2");
const useAppStore = require("./MessageContext");
const setUsers = useAppStore((state) => state.Setusers);

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "whatsapp-clone",
});

db.query(`SELECT * FROM users`, (err, data) => {
  if (err) throw err;
  setUsers(data);
});
