
// By default all values are read as string so It is a good practice to convert into suitable data type

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}


export default conf