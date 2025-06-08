import { openDB } from "idb";

export const initDB = async ()=>{
    return await openDB("MyDB",1,{
        upgrade(db){
            if(!db.objectStoreNames.contains("users")){
                db.createObjectStore("users",{          
                    keyPath: 'id',
                    autoIncrement: true,
                })}
            if(!db.objectStoreNames.contains("original")){
                db.createObjectStore("original",{
                    keyPath: 'id',
                    autoIncrement: true,
                })
            } 
        }
    })
}