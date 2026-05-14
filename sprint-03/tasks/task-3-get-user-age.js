/* Implement the getAge() function to get user age. To find his age you need to call a getUser() async function
that returns a user object in format {role: "somerole", id: 1}.

To get the actual user info you need to call another async function getUserProfile(id), which uses id returned
from the previous function and returns user info as an object

{name: "Petro", age: 15}. The getAge() must return the age of the user. */

// Mock Helper functions for demonstration
const getUser = async () => ({ role: "somerole", id: 1 });
const getUserProfile = async (id) => ({ name: "Petro", age: 15 });

const getAge = async () => {
    try {
        const user = await getUser();
        const profile = await getUserProfile(user.id);
        return profile.age;
    } catch (error) {
        console.error("Failed to retrieve age:", error.message);
        throw error;
    }
};

getAge().then(age => console.log('User Age:', age));