// import express, { Request, Response } from 'express';
// import path from 'path';

// // Import the routes and controllers for each API
// import { gptRoutes } from './gpt/gptRoutes';
// import { textToSpeechRoutes } from './googletts/textToSpeechRoutes';
// import { whisperRoutes } from './whisper/whisperRoutes';

// const app = express();

// app.use(express.static(path.join(__dirname, '../public')));
// app.get('/', (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../public/ui/index.html'));
// });

// // Define routes for each API
// app.use('/gpt', gptRoutes);
// app.use('/text-to-speech', textToSpeechRoutes);
// app.use('/whisper', whisperRoutes);

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App listening on port ${port}!`);
// });
