import { Account, Client } from 'react-native-appwrite';
import { platform } from "os";

export const appwriteconfig = {
    endpoint : 'https://cloud.appwrite.io/v1',
    platform: 'com.odoi.axvid',
    projectId: '66760d67001c71c112e0',
    databaseId: '66760d67001c71c112e0',
    userCollectionId: '66761205000bddb54b92',
    videoCollectionId: '66761265002e01821a75',
    storageId: '66769545003549ef62d1',

}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteconfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteconfig.projectId) // Your project ID
    .setPlatform(appwriteconfig.platform) // Your application ID or bundle ID.
;
 

const account = new Account(client);




export   const createUser = () => {
// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });


}


