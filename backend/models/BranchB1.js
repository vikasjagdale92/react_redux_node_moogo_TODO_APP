//BranchB1.js
//First Commit

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BranchB1 = new Schema({
  branchName: {
    type: String
  }
});

const branchB1 = mongoose.model("branchB1", BranchB1);
module.exports(branchB1);