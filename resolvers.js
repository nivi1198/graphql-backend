//Unused file

const channels = [{
    id: 1,
    name: 'soccer'
}, {
    id: 2,
    name: 'baseball'
}];

const users = [
    // {
    //     id: 1,
    //     name: "Ankita",
    //     gender: "Female",
    //     email: "test@gmail.com"
    // },
    // {
    //     id: 2,
    //     name: "Ritika",
    //     gender: "Female",
    //     email: "test@gmail.com"
    // },
    // {
    //     id: 3,
    //     name: "Seema",
    //     gender: "Female",
    //     email: "test@gmail.com"
    // },
    // {
    //     id: 4,
    //     name: "Rajeev",
    //     gender: "Male",
    //     email: "test@gmail.com"
    // }
]

let nextChannelId = 3;
let nextUserId = 5;
const resolvers = {
    Query: {
        channels: () => {
            return channels;
        },
        channel: (root, { id }) => {
            return channels.find(channel => channel.id === parseInt(id, 10))
        },
        users: () => {
            return users;
        },
        user: (root, { id }) => {
            return users.find(user => user.id === parseInt(id, 10))
        }
    },
    Mutation: {
        addChannel: (root, args) => {
            const newChannel = { id: nextChannelId++, name: args.name };
            channels.push(newChannel);
            return newChannel;
        },
        addUser: (root, args) => {
            const { name, gender, email } = args;
            const newUser = { id: nextUserId++, name, gender, email };
            users.push(newUser);
            return newUser;
        },
        updateUser: (root, args) => {
            let i = -1;
            let { id, name, gender, email } = args;
            i = users.findIndex(user => user.id === parseInt(id, 10));
            if (i !== -1) {
                name = name ? name : users[i].name;
                gender = gender ? gender : users[i].gender;
                email = email ? email : users[i].email;
                users[i] = { ...users[i], name, gender, email }
            }
            return users[i];
        },
        deleteUser: (root, { id }) => {
            let i = -1;
            let removedUser = null;
            i = users.findIndex(user => user.id === parseInt(id, 10));
            if (i !== -1) {
                removedUser = users.splice(i, 1)[0];
            }
            message = (i === -1) ? { text: `User with id ${id} not found!` } : { text: null }
            return removedUser ? { ...removedUser, message } : { id: id, name: "", email: "", gender: "", message: { ...message, } };
        }
    }
};

module.exports = resolvers;
