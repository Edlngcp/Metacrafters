const NFTs = []

function minNFT(_name, _breed, _age, _species){
    const NFT = {
        "name": _name,
        "breed": _breed,
        "age": _age,
        "species": _species
    }
    NFTs.push(NFT);
    console.log("Pet Named " + _name + " Created...");

}

function listNFTs(){
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nPet ID: \t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Breed: \t\t" + NFTs[i].breed);
        console.log("Age: \t\t" + NFTs[i].age);
        console.log("Species: \t" + NFTs[i].species);
    }
}

function getTotalSupply(){
    console.log("\nNumber of NFTs: " + NFTs.length);
}

minNFT("Magenta", "Siberian Husky", "5 Months Old", "Dog");
minNFT("Wolf", "Siberian Husky", "3 Months Old", "Dog");
minNFT("Kira", "German Shepherd", "1 Year Old", "Dog");
minNFT("Max", "Alaskan Malamute", "2 Years Old", "Dog");
listNFTs();
getTotalSupply();
