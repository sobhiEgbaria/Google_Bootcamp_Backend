import express from 'express';
import PersonRoute from './routes/PersonRoute';
import 'dotenv/config'
import path, { dirname } from 'path';
import cors from 'cors';


const server = express();

const port = 9004; // default port to listen
server.use(express.json());
server.disable('etag');
server.use(cors());

server.use('/static', express.static(path.join(__dirname, 'public')))

////////////// Route User //////////////
server.use("/person", PersonRoute);

// start the express server
server.listen( port, () => {
    console.log( `server started at port:${ port }` );
} );























////////////// Use Controller API ////////////// 
// server.get('/example', async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const result = performOperation();
//       res.json({ status: 'success', result });
//     } catch (error) {
//       if(error instanceof NotFoundError){
//         res.status(400).json({ status: 'error', message: error.message });
//       }
//     }
//   });



// function performOperation() {
//   // Simulate an error
//   throw new NotFoundError('Something went wrong');
// }