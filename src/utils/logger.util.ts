import chalk from 'chalk';

export const logger = (message: string, type: 'default'|'error'|'info'|'success'|'warning' = 'default', data?: any) => {
    switch (type) {
        case 'error':
            console.log(chalk.red(message, data));
            break;
        case 'info':
            console.log(chalk.blue(message, data));
            break;
        case 'success':
            console.log(chalk.green(message, data));
            break;
        case 'warning':
            console.log(chalk.yellow(message, data));
            break;
        default:
            console.log(message, data);
            break;
    }
};
