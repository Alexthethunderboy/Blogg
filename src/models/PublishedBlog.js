import mongoose from 'mongoose';
import Script from 'next/script';

const { Schema} = mongoose

const PublishedBlogSchema = new Schema(
    {
        title: {
            type : String,
            required : true,
        },

        tag: {
            type : String,
            required : true, 
        },

        tagImage: {
            type : String,
            required: true,
        },

        ReadTime: {
            type: String,
            required: true
        },

        Story: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)

export default mongoose.models.PublishedBlogSchema || mongoose.model("PublishedBlog", PublishedBlogSchema );