import { Schema, model } from 'mongoose';

interface IUser {
    username: string;
    password: string;
    email: string;
    roles: Array<string>;
    words: Array<any>;
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    roles: {
        type: [String],
        enum: ['user', 'admin', 'super_admin', 'sys_admin'],
        default: ['user'],
    },
}, {
    timestamps: true,
});

export const User = model<IUser>('User', UserSchema);
