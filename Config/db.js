const mongoose =require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://cluster0.fszmt.mongodb.net', 
    {
    dbName:'E-Shop',
    user:'priya_1920',
    pass:'priya',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    });

    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (err) {
    console.log(err)
    process.exit(1);
  }
};

module.exports=connectDB;