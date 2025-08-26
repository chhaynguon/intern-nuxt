import { useApollo } from "../composables/useApollo";

// export class EventService {
//   static async getEventById(id: number) {
//     const { apollo, gql } = useApollo()

//     const { data } = await apollo.query({
//       query: gql`
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
//     })

//     return data.getEventById
//   }

//   static async getEventByTitle(title: string) {
//     const { apollo, gql } = useApollo()

//     const { data } = await apollo.query({
//       query: gql`
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
//     })

//     return data.getEventByTitle
//   }
// }

export class EventService {
  async getEventsMini() {
    return [
      {
        id: 1,
        title: "MoU with SARANA LAW FIRM",
        thumbnail:"https://www.philliptrustee.com.kh/v2/img/SARANA%20LAW_Thum.jpg",
      },
      {
        id: 2,
        title: "MoU with Sunpay",
        thumbnail:"https://www.philliptrustee.com.kh/v2/img/Sunpay_thum.jpg",
      },
      {
        id: 3,
        title: "MoU with Yi Fung Real Estate",
        thumbnail:"https://www.philliptrustee.com.kh/v2/img/Yi%20Fung%20Real_Estate_Thum.jpg",
      },
    ];
  }
}
