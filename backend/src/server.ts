import app, { init } from './index';

const port = +process.env.PORT || 5002;

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});
