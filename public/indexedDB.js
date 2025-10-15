const dbName = "MoneyTransferPro"
const dbVersions = 1;
let db;

const request  = window.indexedDB.open(dbName, dbVersions);

request.onupgradeneeded = (event) => {
    db = event.target.result
    console.log("ouverture de la db : ",db);
    


    const stores = [

        {name:"users",keyPath:"id",index:["prenom","nom","email","phone","password","balance"]},
        {name:"expense",keyPath:"id",index:["userid","categoryId","amount","date"]},
        {name:"recette",keyPath:"id",index:["userId","categoryId","amount","date"]},
        {name:"category",keyPath:"id",index:["name"]},
        {name:"transactions",keyPath:"id",index:["fromUserId","toUserId","amount","date"]}
    ];


    stores.forEach(s=>{
        if(!db.objectStoreNames.contains(s.name)) {
         const store =  db.createObjectStore(s.name,{keyPath:s.keyPath,autoIncrement:true})

         s.index.forEach(i=>{
            store.createIndex(i,i,{unique:false})})
         }
         console.log("creation des ObjectStores");
         

    });


};


request.onsuccess = (event) => {
    db = event.target.result
};

request.error = (event) => {
    console.log("Erreur Ouverture DB",event.target.error)
};