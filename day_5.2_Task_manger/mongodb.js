import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "Task_manger";

MongoClient.connect(connectionUrl, (error, client) => {
  if (error) {
    console.log(error);
  }
  const db = client.db(databaseName);

  db.collection("users").insertOne({
    name: "sobhi",
  });
});
