const testimonials = [
    {
        name: "Marian Kowalski",
        photoUrl: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I have been a loyal customer of apple for many years now and I can confidently say that they have never failed to impress me. From their sleek and innovative designs to their user-friendly interfaces, apple has truly set the standard for technology companies. Their products are not only aesthetically pleasing but also reliable and efficient. I have owned multiple apple devices and have never encountered any major issues. The customer service at apple is also top-notch, always ready to assist and provide solutions. I highly recommend apple to anyone looking for high-quality and cutting-edge technology. Thank you, apple, for continuously exceeding my expectations."
    },
    {
        name: "Marian Nowak",
        photoUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I have been using fb for years now and I must say, it has truly revolutionized the way I connect with people. The platform is user-friendly and constantly evolving to meet the needs of its users. Whether it's staying in touch with friends and family, or discovering new communities and interests, fb has it all. The best part is, it's free and accessible to everyone. I highly recommend fb to anyone looking for a reliable and efficient social media platform. Thank you fb for keeping us connected!"
    },
    {
        name: "Adam Nowak",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I have been a loyal customer of amazon for many years now and I must say, I am thoroughly impressed with their service. From their vast selection of products to their lightning-fast delivery, amazon has truly set the bar high for online shopping. I have never had any issues with my orders and their customer service team is always quick to resolve any concerns I may have. What I appreciate most about amazon is their commitment to customer satisfaction. They constantly strive to improve their services and make the shopping experience even better for their customers. I highly recommend amazon to anyone looking for a reliable and convenient online shopping platform. Thank you, amazon, for making my life easier and my shopping experience enjoyable. Keep up the great work!"
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
        idx =0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
};