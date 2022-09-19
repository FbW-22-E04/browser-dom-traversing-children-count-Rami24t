log = console.log;
console.clear();
//1.
log('<', wrapper.tagName, '>children: ', wrapper.childElementCount);
for (const child of wrapper.children) {
    log(' - <', child.tagName, '>children: ', child.children.length);
    for (const grandChild of child.children) {
        console.log('         - <', grandChild.nodeName, '>children: ', grandChild.children.length);
        for (const ggrandChild of grandChild.children) {
            console.log('            - <', ggrandChild.nodeName, '>children: ', ggrandChild.children.length);
            for (const gggrandChild of ggrandChild.children) {
                console.log('               - <', gggrandChild.nodeName, '>children: ', gggrandChild.children.length);
                for (const ggggrandChild of gggrandChild.children) {
                    console.log('                    - <', ggggrandChild.nodeName, '>children: ', ggggrandChild.children.length);
                    for (const gggggrandChild of ggggrandChild.children) {
                        console.log('                    - <', gggggrandChild.nodeName, '>children: ', gggggrandChild.children.length);
                        for (const ggggggrandChild of gggggrandChild.children) {
                            console.log('                          - <', ggggggrandChild.nodeName, '>children: ', ggggggrandChild.children.length);
                            for (const gggggggrandChild of ggggggrandChild.children) {
                                console.log('                                  - <', gggggggrandChild.nodeName, '>children: ', gggggggrandChild.children.length);
                            }
                        }
                    }
                }
            }
        }
    }
}

// let children = wrapper.children;
// let child = children[0];
// while (child && children) {
//     for (child of children) {
//         console.log('list: ', [...child.children], 'number: ', child.children.length);
//         //        child.style.backgroundColor = 'blue';
//     }
//     children = child.children;
//     child = children[0];
// }



// 2.
// console.log(wrapper);
// console.log(wrapper.children);
function maxClass() {
    let result = Array.from(wrapper.children).reduce((acc, curr) => {
        //        log('new loop', acc); log(acc?.classList?.length); log(curr.classList.length); log(curr);
        return acc?.classList?.length > curr.classList.length ? acc : curr;
    }, []);
    return { 'elementMaxClasses': result, 'maxClassesNumber': result.classList.length };
}
// console.log("Object { element with the most classes, number of classes}", maxClass());
