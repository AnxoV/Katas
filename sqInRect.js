function sqInRect(lng, wdth){
    console.log(lng, wdth);
    if (lng === wdth) return [lng];

    return Math.pow(Math.min(lng, wdth), 2) + ", " + sqInRect(Math.max(lng, wdth)-Math.min(lng, wdth), Math.min(lng, wdth));
}

console.log(sqInRect(7, 5));