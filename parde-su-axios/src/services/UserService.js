class UserService {
    constructor() {
        this.username = "Anonymous";
    }
    getUsername = () => {
        return this.username;
    }

    setUsername = (name) => {
        this.username = name;
        this.updateMe();
    }

    updateMe = () => { }

}

export default UserService