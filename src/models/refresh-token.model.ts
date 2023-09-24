import { Schema, Types, model } from 'mongoose';
import { jwt } from '../configs';

interface IRefreshToken {
    refresh_token: string;
    user_id: Types.ObjectId;
    createdAt: Date;
}

const RefreshTokenSchema = new Schema<IRefreshToken>({
    refresh_token: {
        type: String,
        required: true,
        trim: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: jwt.configs.refresh_token_expiration_time_in_db,
    },
});

export const RefreshToken = model<IRefreshToken>('RefreshToken', RefreshTokenSchema);
