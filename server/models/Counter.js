const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    process: String,
    group: String,
    kind: String,
    task: String,
    msg: String,
    target_date: Date,
    time_limit: String,
    ts: Number,
    status: String,
});

module.exports = mongoose.model('TimeStamps', CounterSchema);
