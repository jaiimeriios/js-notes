"use strict";

import playGuitar from "./main-module.js";
import { shredding as shred, plucking as pluck, User } from "./main-module.js";

console.log(playGuitar());
console.log(shred());
console.log(pluck());

const yo = new User("e@mail.com", "merengues");
console.log(yo);
console.log(yo.greeting());

// Lo mismo pero importando todos ala vez
// import * as Guitar from "./main-module.js";
// console.log(Guitar.default());
// console.log(Guitar.shredding());
// console.log(Guitar.plucking());






// Higher Order Functions

import posts from "./main-posts.js";

posts.forEach((post) => {
    // console.log(post)
    console.log("todos los post");
});

const filteredPosts = posts.filter((post) => {
    return post.userId === 5;
});
    console.log(filteredPosts);


const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10
})
    console.log(mappedPosts)

const reducedPosts = mappedPosts.reduce((sum, post) => {
    return sum + post
})
    console.log(reducedPosts)