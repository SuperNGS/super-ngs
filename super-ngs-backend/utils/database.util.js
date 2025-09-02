import { getDatabase, get, ref, child } from "firebase/database";

/**
 * A utility class to manage database connections and operations
 */
class DataBase {
    // Tracks the database connection reference
    reference;

    /**
     * On initializationm, create a reference to the database
     */
    constructor() {
        this.reference = ref(getDatabase());
    }

    /**
     * Attempts to get a reference to the database, if not already connected
     * @returns {Reference} The database reference
     */
    connect() {
        if (!this.reference) {
            this.reference = ref(getDatabase());
            console.log('Database connected');
        }
        return this.reference;
    }

    /**
     * Provided a path, attempts to get the data at that path from the database
     * @param {*} path The path to get from the database
     * @returns A promise that resolves to the data at the specified path
     */
    get(path) {
        if (!this.reference) {
            this.reference = ref(getDatabase());
            console.log('Database connected');
        }
        return get(child(this.reference, path));
    }
}

// Export a singleton instance of the DataBase class
export default DataBase;