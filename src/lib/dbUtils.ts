import { initDB } from "./db";

type textType = {
    jp:string[];
    rm:string[];
}

export async function addUsers(name:string){
    const db = await initDB();
    const users = await db.getAll("users");
    if(!users.some(user => user.name===name)){
        await db.add("users",{name});
    }else{
        throw new Error("既存のユーザーです");
    }

}
export async function getUsers(){
    const db =await initDB();
    return await db.getAll("users")
}
export async function addOriginal(mode:number,text:textType){
    const db = await initDB();
    db.add("original",{
        mode:mode,
        jp:text.jp,
        rm:text.rm
    }
    );
}
export async function getOriginal(){
    const db = await initDB();
    return await db.getAll("original");
}
