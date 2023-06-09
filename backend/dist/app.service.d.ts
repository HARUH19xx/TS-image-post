export declare const helloWorld: {
    getHello: () => string;
};
export declare const registerService: {
    register: (username: string, password: string) => Promise<"This username is already taken." | "User registered successfully!">;
    authenticate: (username: string, password: string) => Promise<"User authenticated successfully!" | "Invalid username or password.">;
};
export declare const loginService: {
    login: (username: string, password: string) => Promise<boolean>;
};
