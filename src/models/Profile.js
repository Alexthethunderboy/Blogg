import mongoose  from "mongoose";

const { Schema } = mongoose

const profileSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required : true,
        },

        username: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: false,
        }
    },
    { timestamps : true }
)

export default mongoose.models.Profile || mongoose.model("Profile", profileSchema);