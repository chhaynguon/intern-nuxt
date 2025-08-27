export class KeyService {
  async getServicesMini() {
    return [
      {
        id: 1,
        link: "holdProperty",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/key_service_img_01.jpg",
        title: "Hold Trust Property",
      },
      {
        id: 2,
        link: "holdPersonal",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/key_service_img_02.jpg",
        title: "Hold Personal Trust",
      },
      {
        id: 3,
        link: "escrowService",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/key_service_img_03.jpg",
        title: "Escrow Service",
      },
      {
        id: 4,
        link: "salePurchase",
        thumbnail:
          "https://www.philliptrustee.com.kh/v2/img/key_service_img_04.jpg",
        title: "Sales & Purchase Agreement (SPA) Service",
      },
    ];
  }
}
