// Write your solution in this file!
const driver = {a: 1, b:2};
function updateDriverWithKeyAndValue(driver, key, value){
    const newObj = {...driver} ;
    newObj[key] = value;
    return newObj;

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key, value) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key, value){
    delete driver[key];
    return driver;

}