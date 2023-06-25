-- create database
CREATE DATABASE IF NOT EXISTS audiophile;

-- create Product table
CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    features TEXT NOT NULL,
    boxItems TEXT NOT NULL,
    imagePath TEXT NOT NULL,
    price VARCHAR(10) NOT NULL,
    categories VARCHAR(20) NOT NULL
)

-- create HomeProducts table
CREATE TABLE home_products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    imagePath VARCHAR(100) NOT NULL,
    productID INT,
    FOREIGN KEY (productID) REFERENCES products (id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert data into HomeProducts table
INSERT INTO home_products
(id, name, description, imagePath, productID)
VALUES
(1,
"XX99 Mark II Headphones",
"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
"assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
1
),
(2,
"ZX9 SPEAKER",
"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
"assets/home/desktop/image-speaker-zx9.png",
4
),
(3,
"ZX7 SPEAKER",
"",
"assets/home/desktop/image-speaker-zx7.jpg",
5
),
(4,
"YX1 EARPHONES",
"",
"assets/home/desktop/image-earphones-yx1.jpg",
6
);

-- insert data into product table 
INSERT INTO products
(id, name, description, features, boxItems, imagePath, price, categories)
VALUES
(1, 
"XX99 Mark II Headphones", 
"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
"Featuring a genuine leather head strap premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you'are talking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat. 

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
'[{"itemName": "Headphones Unit", "itemQuantity": 1}, {"itemName": "Replacement earcups", "itemQuantity": 2}, {"itemName": "User manual", "itemQuantity": 1}, {"itemName": "3.5mm 5m audio cable", "itemQuantity": 1}, {"itemName": "Travel bag", "itemQuantity": 1} ]',
'["assets/product-xx99-mark-two-headphones/desktop/image-product.jpg", "assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg", "assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg", "assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"]',
"2,999",
"headphones"
),
(2, 
"XX99 Mark I Headphones", 
"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
"As the headphones all others are measured against, the XX99 Mark I demonstrates over five decaded of audio expertises, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. 

From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back desgin delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a speically tuned cable is included with a balanced gold connector.",
'[{"itemName": "Headphones Unit", "itemQuantity": 1}, {"itemName": "Replacement earcups", "itemQuantity": 2}, {"itemName": "User manual", "itemQuantity": 1}, {"itemName": "3.5mm 5m audio cable", "itemQuantity": 1}]',
'["assets/product-xx99-mark-one-headphones/desktop/image-product.jpg", "assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg", "assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg", "assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"]',
"1,750",
"headphones"
),
(3, 
"XX59 Headphones", 
"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
"These headphones have been created from durable, high-quality materials tough enoguh to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. 

More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paried with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the eaercups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
'[{"itemName": "Headphones Unit", "itemQuantity": 1}, {"itemName": "Replacement earcups", "itemQuantity": 2}, {"itemName": "User manual", "itemQuantity": 1}, {"itemName": "3.5mm 5m audio cable", "itemQuantity": 1}]',
'["assets/product-xx59-headphones/desktop/image-product.jpg", "assets/product-xx59-headphones/desktop/image-gallery-1.jpg", "assets/product-xx59-headphones/desktop/image-gallery-2.jpg", "assets/product-xx59-headphones/desktop/image-gallery-3.jpg"]',
"899",
"headphones"
),
(4, 
"ZX9 Speaker", 
"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
"Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxical, USB Type-B, stereo RC, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm 
tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass 
unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you 
will experience new sensations from old songs since it can respond to even the subtle waveforms.
",
'[{"itemName": "Speaker Unit", "itemQuantity": 2}, {"itemName": "Speaker cloth panel", "itemQuantity": 2}, {"itemName": "User manual", "itemQuantity": 1}, {"itemName": "3.5mm 5m audio cable", "itemQuantity": 1}, {"itemName": "10m optical cable", "itemQuantity": 1}]',
'["assets/product-zx9-speaker/desktop/image-product.jpg", "assets/product-zx9-speaker/desktop/image-gallery-1.jpg", "assets/product-zx9-speaker/desktop/image-gallery-2.jpg", "assets/product-zx9-speaker/desktop/image-gallery-3.jpg"]',
"4,500",
"speakers"
),
(5, 
"ZX7 Speaker", 
"Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
"Reap the advantages of a flat diaphgram tweeter cone, This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers connot provide. The woofers are made from aluminium that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. 

The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimizes acoustics resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
'[{"itemName": "Speaker Unit", "itemQuantity": 2}, {"itemName": "Speaker cloth panel", "itemQuantity": 2}, {"itemName": "User manual", "itemQuantity": 1}, {"itemName": "3.5mm 7.5m audio cable", "itemQuantity": 1}, {"itemName": "7.5m optical cable", "itemQuantity": 1}]',
'["assets/product-zx7-speaker/desktop/image-product.jpg", "assets/product-zx7-speaker/desktop/image-gallery-1.jpg", "assets/product-zx7-speaker/desktop/image-gallery-2.jpg", "assets/product-zx7-speaker/desktop/image-gallery-3.jpg"]',
"3,500",
"speakers"
),
(6, 
"YX1 Wireless Earphones",
"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
"Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics 
designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with 
the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and 
truly immersive sound.

The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants 
built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, 
giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in 
an all new white and grey color scheme as well as the popular classic black.",
'[{"itemName": "Speaker Unit", "itemQuantity": 2}, {"itemName": "Speaker cloth panel", "itemQuantity": 2}, {"itemName": "User manual", "itemQuantity": 1}, {"itemName": "3.5mm 7.5m audio cable", "itemQuantity": 1}, {"itemName": "7.5m optical cable", "itemQuantity": 1}]',
'["assets/product-yx1-earphones/desktop/image-product.jpg", "assets/product-yx1-earphones/desktop/image-gallery-1.jpg", "assets/product-yx1-earphones/desktop/image-gallery-2.jpg", "assets/product-yx1-earphones/desktop/image-gallery-3.jpg"]',
"599",
"earphones"
);


