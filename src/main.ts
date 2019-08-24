import * as yargs from 'yargs';
import { calcBestPetShop } from './calcBestPetShop';

const args = yargs.demandCommand(3).argv._;

calcBestPetShop(args);