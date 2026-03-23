/**
 * ====================================================
 *  CẤU HÌNH WEBSITE - SHOP HOA PHAN HUYỀN
 *  Chỉnh sửa thông tin tại đây để cập nhật toàn bộ website
 * ====================================================
 */

const SITE_CONFIG = {

    // ─── THÔNG TIN SHOP ─────────────────────────────
    shop: {
        name: 'NGỌC THÌNH',
        slogan: 'Hoa tươi cao cấp',
        heroTitle: 'Nét đẹp',
        heroHighlight: 'Ngọc Thình',
        heroDescription: 'Mỗi bó hoa là một câu chuyện, mỗi cánh hoa là một lời yêu thương. Chúng tôi mang đến vẻ đẹp tinh tế cho mọi khoảnh khắc đặc biệt.',
        aboutDescription1: 'Phan Huyền được thành lập với niềm đam mê mãnh liệt dành cho hoa tươi và nghệ thuật cắm hoa. Chúng tôi tin rằng mỗi bó hoa không chỉ đơn thuần là sự kết hợp của màu sắc, mà còn là cầu nối cho những cảm xúc chân thành nhất.',
        aboutDescription2: 'Với đội ngũ nghệ nhân hoa giàu kinh nghiệm, chúng tôi cam kết mang đến những tác phẩm hoa tươi đẹp nhất, được chọn lọc kỹ lưỡng từ những vườn hoa chất lượng cao.',
        yearExperience: '5+',
        totalCustomers: '2000+',
        totalDesigns: '500+',
        satisfactionRate: '99%',
        footerDescription: 'Mang đến vẻ đẹp tinh tế cho mọi khoảnh khắc. Hoa tươi cao cấp, giao hàng tận nơi.',
        copyright: '© 2026 Phan Huyền. Tất cả quyền được bảo lưu.',
    },

    // ─── THÔNG TIN LIÊN HỆ ─────────────────────────
    contact: {
        address: '999A Long Tuyền, Bình Thủy, Cần Thơ',
        phone: '0941 514 481',
        phoneLink: 'tel:0941514481',
        email: 'phanhuyen072022@gmail.com',
        emailLink: 'mailto:phanhuyen072022@gmail.com',
        workingHours: '7:00 - 22:00 (Thứ 2 - Thứ 7)',
    },

    // ─── MẠNG XÃ HỘI ───────────────────────────────
    social: {
        facebook: '#',      // Thay bằng link Facebook thật
        instagram: '#',     // Thay bằng link Instagram thật
        tiktok: '#',        // Thay bằng link TikTok thật
    },

    // ─── SẢN PHẨM ──────────────────────────────────
    products: [
        {
            id: 1,
            name: 'Hồng Phấn Pastel',
            price: 450000,
            oldPrice: 550000,       // Để null nếu không có giá cũ
            image: 'images/bouquet_roses.png',
            category: 'love',       // birthday | love | luxury | event
            badge: 'hot',           // hot | new | sale | null
            desc: 'Bó hoa hồng phấn kết hợp mẫu đơn trắng tinh tế',
        },
        {
            id: 2,
            name: 'Ly Trắng Thanh Khiết',
            price: 380000,
            oldPrice: null,
            image: 'images/bouquet_lilies.png',
            category: 'event',
            badge: 'new',
            desc: 'Hoa ly trắng thanh lịch cùng baby trắng',
        },
        {
            id: 3,
            name: 'Hướng Dương Rực Rỡ',
            price: 320000,
            oldPrice: 400000,
            image: 'images/bouquet_sunflowers.png',
            category: 'birthday',
            badge: 'sale',
            desc: 'Bó hướng dương tươi sáng, tràn đầy năng lượng',
        },
        {
            id: 4,
            name: 'Hồng Đỏ Lãng Mạn',
            price: 650000,
            oldPrice: null,
            image: 'images/bouquet_red_roses.png',
            category: 'love',
            badge: 'hot',
            desc: '20 bông hồng đỏ Ecuador cao cấp',
        },
        {
            id: 5,
            name: 'Lan Hồ Điệp Sang Trọng',
            price: 850000,
            oldPrice: 1000000,
            image: 'images/bouquet_orchids.png',
            category: 'luxury',
            badge: 'hot',
            desc: 'Chậu lan hồ điệp phong cách tropical',
        },
        {
            id: 6,
            name: 'Cẩm Tú Cầu Dịu Dàng',
            price: 420000,
            oldPrice: null,
            image: 'images/bouquet_hydrangeas.png',
            category: 'birthday',
            badge: 'new',
            desc: 'Giỏ hoa cẩm tú cầu pastel nhẹ nhàng',
        },
        {
            id: 7,
            name: 'Mẫu Đơn Hồng Phấn',
            price: 550000,
            oldPrice: 680000,
            image: 'images/bouquet_peonies.png',
            category: 'love',
            badge: 'sale',
            desc: 'Bó mẫu đơn hồng phấn kết hợp lá xanh tinh tế',
        },
        {
            id: 8,
            name: 'Tulip Tím Trắng',
            price: 480000,
            oldPrice: null,
            image: 'images/bouquet_tulips.png',
            category: 'event',
            badge: 'new',
            desc: 'Bó tulip tím trắng thanh lịch, sang trọng',
        },
        {
            id: 9,
            name: 'Hoa Khô Vintage',
            price: 350000,
            oldPrice: 450000,
            image: 'images/bouquet_dried.png',
            category: 'birthday',
            badge: 'sale',
            desc: 'Bó hoa khô phong cách boho, giữ được lâu dài',
        },
        {
            id: 10,
            name: 'Hộp Hoa Trái Tim',
            price: 750000,
            oldPrice: null,
            image: 'images/bouquet_heartbox.png',
            category: 'love',
            badge: 'hot',
            desc: 'Hộp hoa hồng trái tim lãng mạn, quà tặng hoàn hảo',
        },
    ],

    // ─── DANH MỤC LỌC ──────────────────────────────
    categories: {
        all: 'Tất cả',
        birthday: 'Sinh nhật',
        love: 'Tình yêu',
        luxury: 'Cao cấp',
        event: 'Sự kiện',
    },

    // ─── ĐÁNH GIÁ KHÁCH HÀNG ───────────────────────
    testimonials: [
        {
            name: 'Thanh Trúc',
            role: 'Khách hàng thân thiết',
            initial: 'T',
            color: 'rose',
            text: 'Hoa rất đẹp và tươi lâu. Dịch vụ giao hàng nhanh chóng, nhân viên tư vấn rất nhiệt tình. Chắc chắn sẽ quay lại!',
            stars: 5,
        },
        {
            name: 'Minh Khang',
            role: 'Đặt hoa online',
            initial: 'M',
            color: 'blush',
            text: 'Mình đặt hoa sinh nhật cho bạn gái, bạn ấy rất thích! Hoa được gói rất đẹp và sang trọng. Cảm ơn Phan Huyền!',
            stars: 5,
        },
        {
            name: 'Hạnh Nguyên',
            role: 'Hoa cưới',
            initial: 'H',
            color: 'sage',
            text: 'Đã đặt hoa cho đám cưới tại Phan Huyền. Hoa trang trí rất đẹp, đúng ý mình. Giá cả hợp lý, rất đáng!',
            stars: 5,
        },
    ],

    // ─── DỊCH VỤ (FOOTER) ──────────────────────────
    services: [
        'Hoa sinh nhật',
        'Hoa cưới',
        'Hoa khai trương',
        'Hoa sự kiện',
    ],
};
