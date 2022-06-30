import client from "./client";

const send = (message, listingId) =>

    client.post("/Messages", {
        message,
        listingId,

    })

export default {
    send,
}