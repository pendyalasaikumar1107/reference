import {
    ProfileResponseType,
    Profile as ProfileInput
} from "../types/profile-response.type";

export class Profile {
    private id: string;
    private firstname: string;
    private lastname: string;

    deserialize(input: ProfileInput): this {
        Object.assign(this, input);
        return this;
    }

    get getId() {
        return this.id;
    }

    get getFirstname() {
        return this.firstname;
    }

    get getLastname() {
        return this.lastname;
    }

    set setLastname(name: string) {
        this.lastname = name;
    }

    set setFirstname(name: string) {
        this.firstname = name;
    }

    set setId(id: string) {
        this.id = id;
    }

    getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}


export class Profiles {
    private profiles: Map<string, Profile>;

    deserialize(input: ProfileResponseType): this {
        if (input && input.profiles) {
            const map = new Map<string, Profile>();
            input.profiles.forEach((profile: ProfileInput) => {
                map.set(profile.id, new Profile().deserialize(profile));
            });
            this.profiles = map;
        }
        return this;
    }

    get getProfiles() {
        return this.profiles;
    }

    set setProfiles(profiles: Map<string, Profile>) {
        this.profiles = profiles;
    }
}


