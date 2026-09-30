import cron from 'node-cron';
import { syncDB } from './tasks/sync-db';


console.log('Inicio');
cron.schedule('1-59/5 * * * * *', syncDB);


