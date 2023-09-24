import jwt from 'jsonwebtoken';

export type TServerConfig = {
    db_url: string;
    host: string;
    log_level: string;
    port: number;
};

export type TJwtConfig = {
    algorithm: jwt.Algorithm;
    hash_salt: number;
    refresh_token_expiration_time: string;
    access_token_secret_key: string;
    refresh_token_secret_key: string;
    access_token_expiration_time: string;
    refresh_token_expiration_time_in_db: number;
};
