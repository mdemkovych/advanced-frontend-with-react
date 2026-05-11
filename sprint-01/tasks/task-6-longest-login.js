/* Implement the longestLogin(loginList) function, which takes an array of user logins loginList and returns
the longest login. If the logins of the same length are the longest in the array, the login element with the l
argest index is returned. Tip: You can use the reduce() method to solve the task.

Function examples:

longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]);   //  Prokopenko

longestLogin(["user1", "user2", "333", "user4", "aa"]);   //  user4 */

const longestLogin = (loginList) => 
    loginList.reduce((longest, current) => current.length >= longest.length ? current : longest);

console.log(longestLogin(["maxxx", "NewUser", "admin111", "Administrator"]));
console.log(longestLogin(["User123", "Steven Dobson", "qwerty12345"]));
console.log(longestLogin(["Carl1999", "ivan@gmail.com", "nick-name"]));
console.log(longestLogin(["user1", "user2", "333", "user4", "aa"]));
console.log(longestLogin(["larian", "questttt", "longest_user_name", "Nick Nickson"]));