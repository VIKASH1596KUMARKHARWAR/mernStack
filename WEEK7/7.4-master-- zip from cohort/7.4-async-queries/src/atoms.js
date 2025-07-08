import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key : "networkAtomSelector",
        get: async () => {
//let check a try 
            // await new Promise (r=>setTimeout(r,5000));//sleep for 5-sec

            //note unless 5 sec it won't render anythings >> we will learn more about it when we learn useRecoilLoadable
            const res = await axios.get("http://localhost:3000/notifications")
            return res.data;
        }
    })
});


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notifications);
        return allNotifications.network +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications.messaging
    }
})