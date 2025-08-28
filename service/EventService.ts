import { useApollo } from "../composables/useApollo";
import { ref, onMounted } from "vue";

// export class EventService {
//   static async getEventById(id: number) {
//     const { apollo, gql } = useApollo()

//     const { data } = await apollo.query({
//       query: gql`
//         query ($id: Int!) {
//           getEventById(id: $id) {
//             id
//             sub_title
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

//   static async getEventBysub_title(sub_title: string) {
//     const { apollo, gql } = useApollo()

//     const { data } = await apollo.query({
//       query: gql`
//         query ($sub_title: String!) {
//           getEventBysub_title(sub_title: $sub_title) {
//             id
//             sub_title
//             description
//             background
//             picture
//           }
//         }
//       `,
//       variables: { sub_title },
//     })

//     return data.getEventBysub_title
//   }
// }

export class EventService {
  async getEventsMini() {
    return [
      {
        id: 1,
        sub_title: "MoU with SARANA LAW FIRM",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/SARANA%20LAW_Thum.jpg",
      },
      {
        id: 2,
        sub_title: "MoU with Sunpay",
        thumbnail: "https://www.philliptrustee.com.kh/v2/img/Sunpay_thum.jpg",
      },
      {
        id: 3,
        sub_title: "MoU with Yi Fung Real Estate",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/Yi%20Fung%20Real_Estate_Thum.jpg",
      },
      {
        id: 4,
        sub_title: "MoU with RoseMarvel Property",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/RoseMarvel%20Property_Thum.jpg",
      },
      {
        id: 5,
        sub_title: "MoU with La Masison Plaza",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/La%20Maison%20Plaza_thum.jpg",
      },
      {
        id: 6,
        sub_title: "MoU with Dragon Land Investment",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/dragon%20Land_thum.jpg",
      },
      {
        id: 7,
        sub_title: "MoU with Sarita Resort",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/Sarita%20Resort_thum.jpg",
      },
      {
        id: 8,
        sub_title: "MoU with Borey Vimean Samnang ",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/Borey%20Vimean_thum.jpg",
      },
      {
        id: 9,
        sub_title: "MoU with IPS",
        thumbnail: "	https://www.philliptrustee.com.kh/v2/img/IPS_Thum.jpg",
      },
      {
        id: 10,
        sub_title: "MoU with Urbanland",
        thumbnail: "https://www.philliptrustee.com.kh/v2/img/MoU_Urbanlan.jpg",
      },
      {
        id: 11,
        sub_title: "TR Explores Market Innovations & Best Practices in Singapore",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/best_practices_with_singapore_1.jpeg",
      },
      {
        id: 12,
        sub_title: "MoU with VI Land Investment",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/mou_v1_land_investment_thum.jpg",
      },
      {
        id: 13,
        sub_title: "Public Notice",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/david-thumnail-04.jpg",
      },
      {
        id: 14,
        sub_title:
          "Phillip Trustee (Cambodia) Recognized as Outstanding Trust Service Provider at 2024 Trust Forum",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/1_recognized_trust_service.jpg",
      },
      {
        id: 15,
        sub_title: "Seminar on Family Trust for Succession Planning",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/event15/event15_thumbnail.png",
      },
      {
        id: 16,
        sub_title: "MoU with HONGO TSUJI TAX & ACCOUNTING",
        thumbnail:
          "	https://www.philliptrustee.com.kh/v2/img/event16/event16_1.jpg",
      },
      {
        id: 17,
        sub_title: "MoU with CVEA",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/event17/event17-11.jpg",
      },
    ];
  }
}
