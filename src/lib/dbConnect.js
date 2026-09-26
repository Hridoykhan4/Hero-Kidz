import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

export const collectionNamesObj = {
  USERS: "users",
  PRODUCTS: "products",
  CART: "cart",
  ORDER: "order",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cname) => client.db(dbName).collection(cname);
