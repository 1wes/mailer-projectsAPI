require('dotenv').config();

const {PORT, EMAIL, PASSWORD}=process.env;

module.exports={
    port:PORT,
    myEmail:EMAIL,
    pass:PASSWORD
}
