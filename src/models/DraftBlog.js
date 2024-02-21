import mongoose from 'mongoose';

const { Schema } = mongoose

const draftBlogSchema = new Schema(
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

const DraftBlog = mongoose.models.DraftBlog || mongoose.model("DraftBlog", draftBlogSchema );

export default DraftBlog