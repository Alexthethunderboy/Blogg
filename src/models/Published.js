import mongoose from 'mongoose';
// import Script from 'next/script';

const { Schema } = mongoose

const publishedSchema = new Schema(
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

        readtime: {
            type: String,
            required: true
        },

        story: {
            type: String,
            required: true,
        }
    },
    { timestamps : true }
)

const Published = mongoose.models.Published || mongoose.model( "Published", publishedSchema );

export default Published