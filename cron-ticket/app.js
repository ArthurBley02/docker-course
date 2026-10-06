import cron from 'node-cron';
import syncDb from './tasks/sync-db';

console.log('Inicio');
cron.schedule('1-59/5 * * * * *', syncDb);


