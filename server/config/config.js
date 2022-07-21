const { PORT, DB_NAME, DB_CONNECTION } = process.env;

module.exports = {
  port: PORT || 3005,
  dbConnection: 'mongodb+srv://nedret:nedret1988@machinerydb.of0ap.mongodb.net/?retryWrites=true&w=majority',
};
