export function generateStarArray(stars:number) {
    const NUMBER_OF_STARS = 5;
    let starArray = [];
    let i = 0;
    for(; i< stars; i++) starArray[i] = true;
    for(; i< NUMBER_OF_STARS; i++) starArray[i] = false;

    return starArray;
}