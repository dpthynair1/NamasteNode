const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://dpthynair:2o4jBF34WvqD3SyT@cluster0.4irzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

const dbName = "HelloWorld";
async function main() {
  await client.connect();
  console.log("Connected successfully to the server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  const data = {
    firstName: "Akshay ",
    lastName: "Saini",
    city: "Dehradoon",
    phoneNumber: "076743456",
  };

  const insertResult = await collection.insertOne(data);
  const findResult = await collection.find({}).toArray();
  console.log("Found documents ==> ", findResult);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
