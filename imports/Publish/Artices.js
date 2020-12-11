import { Meteor } from "meteor/meteor";
import {Article}  from "../Collections/Article";
Meteor.publish('Articles', function() {
    const data  = Article.find();
    return data ;
});