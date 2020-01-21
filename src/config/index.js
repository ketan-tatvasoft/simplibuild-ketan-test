import common from "./config.common.json";

const config = require(`./config.${process.env.NODE_ENV}.json`);

export default Object.assign({}, common, config)
