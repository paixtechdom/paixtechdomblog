import sanityClient from "@sanity/client"

export const Client = sanityClient({
    projectId: "m218clx9",
    dataset: "production",
    apiVersion: "2022-09-14",
    useCdn: true
})