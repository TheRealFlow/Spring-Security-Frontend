import axios from "axios";

export default async function getMe () {
    try {
        const user = await axios.get("/app-user/me");
        return user.data
    } catch (e) {
        return null;
    }
}