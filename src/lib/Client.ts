import { createClient } from "@sanity/client"

export const Client = createClient({
    projectId: "m218clx9",
    dataset: "production",
    apiVersion: "2022-09-14",
    useCdn: true
})