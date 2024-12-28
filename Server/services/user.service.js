import User from "../models/user.model.js";

const createUser = async ({firstName, lastName, email, password}) => {
    console.log(firstName, lastName, email, password);
    if (!firstName || !email || !password) {
        throw new Error("All fields are required");
    }

    const user = User.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password
    });
    console.log("User created successfully");

    return user;
};

export default createUser;