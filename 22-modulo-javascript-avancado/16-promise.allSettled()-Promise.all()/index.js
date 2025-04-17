const loadUsers = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);


    if (!response.ok) {
        throw new Error(`GITHUB API returned status code ${response.status}`);
    }

    const user = await response.json();
    return user;

};

const loadRepositories = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);


    if (!response.ok) {
        throw new Error(`GITHUB API returned status code ${response.status}`);
    }

    const repositories = await response.json();
    return repositories.map((repo) => ({ id: repo.id, name: repo.name }));

};

const loadEvents = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/events`);

    if (!response.ok) {
        throw new Error(`GITHUB API returned status code ${response.status}`);
    }

    const events = await response.json();
    return events.map((event) => ({ id: event.id, name: event.type }));

};

const loadAll = async () => {
    try {
        const results = await Promise.allSettled([
            loadUsers('MichaelPiccagli'),
            loadRepositories('MichaelPiccagli'),
            loadEvents('MichaelPiccagli'),
        ])

        console.log(results)

    } catch (error) {
        console.log(error);
    }
};

loadAll();