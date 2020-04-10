const FollowToggle = require ("./follow_toggle");
const UsersSearch = require("./users_search.js")
$(() => {
   let el = $('button.follow-toggle');
   for(let i=0;i<el.length;i++) {
        button = new FollowToggle(el);
   }
    let ele = $('nav.users-search');
    for (let j= 0; j < el.length; j++) {
        search = new UsersSearch(ele);
    }
})