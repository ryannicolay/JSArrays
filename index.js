// Exercise 1
const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
        let array = [];

        for (let i = min; i <= max; i++) {
                array.push(i);
        }

        return array;
}

// Exercise 2

const nums = [1, 2, 3, 4];

// console.log(includes(nums, 2));

function includes(array, searchElement) {
        for (let i = 0; i < array.length; i++) {
                if (searchElement === array[i])
                        return true;
        }

        return false;
}

// Exercise 3

// console.log(except(nums, [1, 2]));

function except(array, excluded) {
        const output = [];
        
        for (let element of array) {
                if (!excluded.includes(element))
                        output.push(element);    
        }

        return output;
}

// Exercise 4

console.log(move(nums, 1, 1));

function move(array, index, offset) {
        if (((index + offset) >= array.length) || (index + offset) < 0) {
                console.error('Invalid offset');
                return undefined;
        }

        const output = [...array];
        const element = output.splice(index, 1)[0];
        output.splice(index + offset , 0, element)
        return output;
}

// Exercise 5

const numbers_5 = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers_5, 1);

console.log(count);

function countOccurrences(array, searchElement) {
        const searchResult = (array.filter(number => number === searchElement));
        return searchResult.length;
}

// Exercise 6

const max = getMax(numbers_5);

console.log(max);

function getMax(array) {
        return array.reduce((a, b) => (a > b) ? a : b);
}

// Exercise 7

const movies = [
        { title: 'a', year: 2018, rating: 4.5 },
        { title: 'b', year: 2018, rating: 4.7 },
        { title: 'c', year: 2018, rating: 3 },
        { title: 'd', year: 2017, rating: 4.5 },
];

const filteredMovies = movies
        .filter(movies => movies.year === 2018 && movies.rating >= 4)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(m => m.title);

console.log(filteredMovies);