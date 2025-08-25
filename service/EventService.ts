// // /service/EventService.ts
// import { useNuxtApp } from '#imports'

// export class EventService {
//   static async getEventById(id: number) {
//     const { $apollo, $gql } = useNuxtApp();

//     const { data } = await $apollo.query({
//       query: $gql`
//         query ($id: Int!) {
//           getEventById(id: $id) {
//             id
//             title
//             description
//             background
//             picture
//           }
//         }
//       `,
//       variables: { id },
//     });

//     return data.getEventById;
//   }

//   static async getEventByTitle(title: string) {
//     const { $apollo, $gql } = useNuxtApp();

//     const { data } = await $apollo.query({
//       query: $gql`
//         query ($title: String!) {
//           getEventByTitle(title: $title) {
//             id
//             title
//             description
//             background
//             picture
//           }
//         }
//       `,
//       variables: { title },
//     });

//     return data.getEventByTitle;
//   }
// }
