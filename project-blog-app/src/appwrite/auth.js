import { Client, Account, ID} from "appwrite";
import config from "../conf/conf";


class Auth_Service
{
    account;
    client;

    constructor()
    {
        this.client = new Client().setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password}) {
        try
        {
            console.log("Email and password = ", email, password);
            const response = await this.account.create(ID.unique(), email, password);
            console.log("After creating a account the response is = ", response);

            if(response)
            {
                return this.loginAccount({email, password});
            }
            else
            {
                return response;
            }
        }
        catch(Error)
        {
            console.log("Error occur while creating a account", Error);
            throw Error;
        }
    }

    async loginAccount({email, password}) {
        try
        {
            const response = await this.account.createEmailPasswordSession(email, password);
            console.log("After login the response is = ", response);
            return response;
        }
        catch(Error)
        {
            console.log("Error occur while login the user");
            throw Error;    
        }
    }
    
    async logoutAccount() {
        try
        {
            // await this.account.deleteSession('current'); // Using current is a special keyword which can help to delete the current session
            await this.account.deleteSessions(); // This will delete all the active session
        }
        catch(Error)
        {
            console.log("Error occur while logging out the user :: logoutAccount() :: ", Error);
        }
    }
    async getCurrentUser() {
        try
        {
            return await this.account.get();
        }
        catch(Error)
        {
            console.log("Error occur while fetching user :: getCurrentUser() :: ", Error);
            return null;
        }
    }
}


const authService = new Auth_Service();

export default authService;