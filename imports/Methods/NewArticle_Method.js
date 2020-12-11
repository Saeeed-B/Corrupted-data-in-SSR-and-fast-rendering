import { Meteor } from 'meteor/meteor';
import { Article } from '../Collections/Article';
Meteor.methods({
    NewArticle(data) {
        const result = Article.insert({
            title: data.title,
            createdAt: new Date()
        });
        return result;
    }
});