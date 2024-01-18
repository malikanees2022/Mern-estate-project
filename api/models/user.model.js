import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://instagram.fmfg1-1.fna.fbcdn.net/v/t51.2885-19/411865514_357492103569691_2127666683481045248_n.jpg?stp=dst-jpg_s150x150&efg=e30&_nc_ht=instagram.fmfg1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=FgCduxSvxCcAX_bMl9G&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfAtl89ASDIRUkBPTGQTrEMHYUU0tglknO-B4fAfpEkucA&oe=65ACF058&_nc_sid=982cc7",
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;