import { Pool } from "pg";
import { query } from "express";

export const getUserByID = async (pool: Pool, id: number) => {
    return pool.connect().then(client => 
        client,query('select name from users where id = $1', [id]).catch(error => {
        console.log(`Client Error: ${error}`)
    }))
}