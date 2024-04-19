const findlargeInteger = (str) => {

    if (str.trim().length == 0) {
        return false;
    }

    const strsplit = str.trim().split(" ");
    //   const sorteditem = strsplit.sort((a,b)=> b.length-a.length) 
    //   console.log(sorteditem[0]);
    return strsplit.reduce((accu, current) => (current.length > accu.length ? current : accu))
}



console.log(
    findlargeInteger(" my name is mr Ramyaranjan Sethi india some country tom ")
);