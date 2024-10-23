import conf from "../conf/conf";
import { Client, Databases, ID } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor()
    {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getPost(slug)
    {
        try
        {
            return await  this.databases.getDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
        }
        catch(Error)
        {
            console.log("Error occur in appwrite Service :: getPost() :: ", Error);
        }
    }

    async getPosts(queries = [Queery.equal("status", false)])
    {
        try
        {
            // As the query is already in square bracket thats why we pass it directly but it must in array 
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId,  queries);

        }
        catch(Error)
        {
            console.log("Error occur while getting all posts = ", Error);
        }
    }

    async createPost({title, slug, content, featuredImage, userId, status = false})
    {
        try
        {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                    title, content, featuredImage, status, userId, slug,
                }
            )
        }
        catch(Error)
        {
            console.log("Error occur while creating a post :: createPost() :: ", Error);
        }
    }


    async updatePost(slug, {title, content, featuredImage, status})
    {
        try
        {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }
            )
        }
        catch(Error)
        {
            console.log("Error occur while updating post  :: updatePost() :: ", Error);

        }
    }

    async deletePost(slug)
    {
        try
        {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
            return true;
        }
        catch(Error)
        {
            console.log("Error occur while deleting post :: deletePost() :: ", Error);
        }
    }

    // Storage Service
    async uploadFile(file)
    {
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            );
        }
        catch(Error)
        {
            console.log("Error occur while uploading a file :: uploadFile() :: ", Error);
        }
    }

    async deleteFile(fileId)
    {
        try
        {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
        }
        catch(Error)
        {
            console.log("Error occur while deleting a file :: deleteFile() :: ", Error);
        }
    }

    filePreview(fileId)
    {
        try
        {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            ).href;
        }
        catch(Error)
        {
            console.log("Error occur while getting a preview of a file :: filePreview() :: ", Error);
        }
    }
}

const service = new Service();

export default service;
