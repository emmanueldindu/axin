import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";

export const appwriteconfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.odoi.axvid",
  projectId: "66760d67001c71c112e0",
  databaseId: "6676114b000c186c2da9",
  userCollectionId: "66761205000bddb54b92",
  videoCollectionId: "66761265002e01821a75",
  storageId: "66769545003549ef62d1",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteconfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteconfig.projectId) // Your project ID
  .setPlatform(appwriteconfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client)

export const createUser = async (email, password, username) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username)
    await signIn(email, password)
    const newUser = await database.createDocument(
        appwriteconfig.databaseId,
        appwriteconfig.userCollectionId,
        ID.unique(),
        {
            accountId : newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    )

    return newUser 
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password)
        return session
        
    } catch (error) {
        throw new Error(error)
        console.log(error)
    }
}



export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await database.listDocuments(
      appwriteconfig.databaseId,
      appwriteconfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );

    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}


export const logout = async () => {
  try {
    const sessions = await account.listSessions();
    const deletePromises = sessions.sessions.map((session) => account.deleteSession(session.$id));
    await Promise.all(deletePromises);
    console.log("All sessions deleted successfully");
  } catch (error) {
    console.error("Error deleting sessions:", error);
    throw new Error(error.message);
  }
}

export const getAllPost = async () => {
  try {
    const posts = await database.listDocuments(
    appwriteconfig.databaseId,
    appwriteconfig.videoCollectionId
    )

    return posts.documents


  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}