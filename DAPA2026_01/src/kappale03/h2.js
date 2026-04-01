
import customers from './data/h2/customers.json' with { type: 'json' };

function removeDuplicates(objects) {
    let set = new Set();
    objects.forEach(item => {
        set.add(JSON.stringify(item))
    });
    return [...set].map(item => JSON.parse(item))
}

function removeDuplicates2(objects) {
    const uniqueStrings = new Set(objects.map(obj => JSON.stringify(obj)));
    return Array.from(uniqueStrings, str => JSON.parse(str));
}

function removeDuplicates3(objects) {
    const set = new Set(objects.map(obj => JSON.stringify(obj)));
    return [...set].map(item => JSON.parse(item))
}

const unique_customers = removeDuplicates3(customers)
console.log(unique_customers)