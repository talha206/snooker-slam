import { User } from "../types/models/user";

export const userSerializer = (payload: any) => {
    const { attributes: { phoneNo } } = payload.data;
    const { included } = payload
    const role = included.find((record: any) => record.type === 'roles')
    const { attributes: { name } } = role;

    const user: User = {
        phoneNo,
        role: {
            name: name
        }
    }

    return user;
}