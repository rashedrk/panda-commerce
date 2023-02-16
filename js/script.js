// ১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?

// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const h2Collection = document.querySelectorAll('h2');
for (const h2 of h2Collection) {
    h2.style.color = 'lightblue';
}

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 

const backpackSection = document.getElementById("backpack");
backpackSection.style.backgroundColor = "tomato";

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px'
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 

// added on shoes section first element 
function buyNowHandle() {
    console.log("buy now button clicked.");
}

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

for (const card of cards) {
    card.addEventListener('click',function (event) {
        // event.target.parentNode.parentNode.style.display = 'none';
        card.parentNode.removeChild(event.target.parentNode.parentNode)
    })
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

document.getElementById('exampleInputEmail1').addEventListener('keyup',function (event) {
    const btnSubmit = document.getElementById('btn-submit');
    const input = event.target.value;
    if (input === 'email') {
        btnSubmit.removeAttribute('disabled');
    } else {
        btnSubmit.setAttribute('disabled',true);
    }
})

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
const images = document.querySelectorAll('img');
//array of random images 
// let randomImage = ["https://tinypng.com/images/social/website.jpg", "https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg", "https://img.freepik.com/free-vector/cute-koala-sleeping-cartoon-illustration_138676-2778.jpg?w=2000","https://cdn.statusqueen.com/mobilewallpaper/thumbnail/mobile_wallpaper_2-399.jpg","https://www.firstpost.com/wp-content/uploads/2017/03/ishant-funny-twitter-380.jpg"]

for (const image of images) {
    // const old = image.src;
    image.addEventListener('mouseenter', function () {
        // let number = Math.floor(Math.random()*randomImage.length); 
        // image.src = randomImage[number] ;
        image.src = "https://tinypng.com/images/social/website.jpg";
    });
    // image.addEventListener('mouseout',function () {
    //     image.src = old ;
    // })
}

// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
document.getElementById('subscribe').addEventListener('dblclick',function () {
    this.style.backgroundColor = "steelblue"
})