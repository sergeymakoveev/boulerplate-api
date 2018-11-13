const R = require('ramda');


const oauth = {
    access_token: '02836f01-8e15-4a3a-90c0-e9115e4d466f',
    token_type: 'bearer',
    refresh_token: '90da6275-30ba-4179-a356-eec634f09df5',
    expires_in: 43199,
    scope: 'read write',
};

const users = R.pipe(
    R.range(1),
    R.map(
        (id) => ({ id, login: `user${id}`, name: `User ${id}`, email: `user.${id}@example.com`, enabled: !!(id%2) })
    )
)(100);

const categories = R.pipe(
    R.range(1),
    R.map(
        (id) => ({ id, name: `Category ${id}`, enabled: !!(id % 2) })
    )
)(100);


module.exports = () => ({
    users,
    signin: oauth,
    signout: {},
    categories,
});
