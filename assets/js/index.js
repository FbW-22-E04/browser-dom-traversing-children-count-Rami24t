
// 2.

log = console.log;
// console.log(wrapper);
// console.log(wrapper.children);


function maxClass() {
    let result = Array.from(wrapper.children).reduce((acc, curr) => {
        //        log('new loop', acc); log(acc?.classList?.length); log(curr.classList.length); log(curr);
        return acc?.classList?.length > curr.classList.length ? acc : curr;
    }, []);
    return { 'elementMaxClasses': result, 'maxClassesNumber': result.classList.length };
}

console.log("Object { element with the most classes, number of classes}", maxClass());
