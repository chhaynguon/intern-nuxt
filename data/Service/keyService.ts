export interface serviceItem {
    id: number
    link: string
    image: string
    title: string
}

export const keyService: serviceItem[] = [
    {
        id: 1,
        link: '/services/holdProperty',
        image: 'https://www.philliptrustee.com.kh/v2/img/key_service_img_01.jpg',
        title: 'Hold Trust Property'
        
    },
    {
        id: 2,
        link: '/services/holdPersonal',
        image: 'https://www.philliptrustee.com.kh/v2/img/key_service_img_02.jpg',
        title: 'Hold Personal Trust'
        
    },
    {
        id: 3,
        link: '/services/escrowService',
        image: 'https://www.philliptrustee.com.kh/v2/img/key_service_img_03.jpg',
        title: 'Escrow Service'
        
    },
    {
        id: 4,
        link: '/services/salePurchase',
        image: 'https://www.philliptrustee.com.kh/v2/img/key_service_img_04.jpg',
        title: 'Sales & Purchase Agreement (SPA) Service'
        
    }

]