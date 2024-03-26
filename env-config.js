require('dotenv').config();

const { PORT, EMAIL, PASSWORD, PITHONE_EMAIL, PITHONE_PASSWORD, HOST } = process.env;

module.exports={
    port:PORT,
    myEmail:EMAIL,
    pass: PASSWORD,
    pithoneEmail: PITHONE_EMAIL,
    pithonePassword: PITHONE_PASSWORD,
    host:HOST
}
