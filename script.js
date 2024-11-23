document.addEventListener("DOMContentLoaded", () => {
    const brandItems = document.querySelectorAll('.brand-item');
    const modelList = document.getElementById('model-list');
    const themeToggleButton = document.getElementById('theme-toggle');

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Light Mode';
        } else {
            themeToggleButton.textContent = 'Dark Mode';
        }
    });

    const carModels = {
        lamborghini: [
            { model: "Aventador", price: "$393,695", image: "https://bluesky-cogcms-prodb.cdn.imgeng.in/media/27179/aventador-svj-roadster-main-image.jpg?width=900" },
            { model: "Huracan", price: "$214,866", image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sto/2023/10_18_refresh/over/hura_sto_over_01_m.jpg" },
            { model: "Urus", price: "$218,000", image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Lamborghini_Urus_20180306_Genf_2018.jpg" },
        ],
        ferrari: [
            { model: "488 GTB", price: "$269,900", image: "https://www.exoticshunter.com/imagetag/633/28/l/Used-2017-Ferrari-488-GTB-Over-100K-in-NovitecCapristo-Add-Ons-+-Full-Service-Just-Completed-1715109106.jpg" },
            { model: "F8 Tributo", price:"$330,000", image: "https://www.motortrend.com/uploads/sites/5/2020/06/2020-Ferrari-F8-Spider-13.jpg" },
            { model: "LaFerrari", price:"$715,000", image: "https://autoru-mag.s3.yandex.net/2021/01/22/a884ca0715184bbcbdd21e2587fa2ed0.jpg" },
        ],
        rollsroyce: [
            { model: "Phantom", price:"$185,000", image: "https://www.autopediame.com/storage/images/rolls%20royce/p90379105-highres-the-million-stitch-r-1576097486.jpg" },
            { model: "Ghost", price:"$416,250", image: "https://manignomgroup.com/wp-content/uploads/2017/05/rolls-royce-ghos-4.jpg" },
            { model: "Cullinan", price:"$392,000", image: "https://www.mansory.com/sites/default/files/styles/1170_x_full_box_image/public/2024-03/Cullinan%20Black%202024-03%20Nr.1032-5%20copy.jpg?itok=Tbrn_EPV" },

        ],
        lexus: [
            { model: "LC 500", price:"$121,900", image: "https://lexuscdn.rotorint.com/LC/2023_05_May/001/e/360/png/lo/1200x675/SPN_LLC_010083LA202A14130A0_comp_012.png" },
            { model: "LS 500", price:"$115,560", image: "https://www.easterns.com/wp-content/uploads/2024/08/Lexus-LS500-Easterns.png" },
            { model: "RX 350", price:"$47,400", image: "https://dealerimages.dealereprocess.com/image/upload/3536310" },
            // ... more models up to 20
        ],
        porsche: [
            { model: "911 Carrera", price:"$", image: "https://cdn.motor1.com/images/mgl/2rJ7X/s3/porsche-911-carrera.jpg" },
            { model: "GT-3", price:"$", image: "https://cdn.motor1.com/images/mgl/3rJ3M/s3/porsche-cayenne.jpg" },
            { model: "Panamera", price:"$", image: "https://cdn.motor1.com/images/mgl/4rJ3M/s3/porsche-panamera.jpg" },
            // ... more models up to 20
        ],
        Ford: [
            { model: "Raptor", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "Mustang", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "Ranger", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        MarcerdezBenz: [
            { model: "Maybech", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "CLA", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "S110", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        BMW: [
            { model: "M8", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "i8", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "M4 cs", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        Toyota: [
            { model: "Prius", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "Supra", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "Camry", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        Mclaren: [
            { model: "LC 500", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "LS 500", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "RX 350", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        Bugatti: [
            { model: "Bugatti Chiron", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "LS 500", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "RX 350", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        Nissan: [
            { model: "LC 500", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "LS 500", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "RX 350", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        Chevrolet: [
            { model: "Bugatti Chiron", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "LS 500", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "RX 350", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        Dodge: [
            { model: "Bugatti Chiron", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "LS 500", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "RX 350", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        Bentley: [
            { model: "Bugatti Chiron", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "LS 500", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "RX 350", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
        Jeep: [
            { model: "Bugatti Chiron", price:"$", image: "https://cdn.motor1.com/images/mgl/9rJ7X/s3/lexus-lc-500.jpg" },
            { model: "LS 500", price:"$", image: "https://cdn.motor1.com/images/mgl/0rJ3M/s3/lexus-ls-500.jpg" },
            { model: "RX 350", price:"$", image: "https://cdn.motor1.com/images/mgl/1rJ7X/s3/lexus-rx-350.jpg" },
            // ... more models up to 20
        ],
    };

    brandItems.forEach(item => {
        item.addEventListener('click', () => {
            const brand = item.getAttribute('data-brand');
            displayModels(carModels[brand]);
        });
    });

    function displayModels(models) {
        modelList.innerHTML = '';
        models.forEach(car => {
            const modelItem = document.createElement('div');
            modelItem.className = 'card';
            modelItem.classList.add('model-item');
            modelItem.innerHTML = `
                <img src="${car.image}" alt="${car.model}">
                <h3>${car.model}</h3>
                <div class="price">${car.price}</div>
                <button class = "btn">Buy</button>
            `;
            modelList.appendChild(modelItem);
        });
    }
    document.querySelector('.scroll-to-home').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('home').scrollIntoView({
            behavior: 'smooth'
        });
    });
    document.querySelector('.cta-button').addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default anchor link behavior
        document.getElementById('brands').scrollIntoView({
            behavior: 'smooth'  // Smooth scroll effect
        });
    });
    document.querySelector('.brand-grid').addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default anchor link behavior
        document.getElementById('models').scrollIntoView({
            behavior: 'smooth'  // Smooth scroll effect
        });
    });
    // Form submission handler to append messages
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const messageRequest = document.createElement('div');
        messageRequest.classList.add('message-request');
        messageRequest.innerHTML = `
            <h3>Name: ${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>

            <!-- Reply Section -->
            <div class="reply-section">
                <textarea class="reply-input" placeholder="Write your reply here..."></textarea>
                <button class="reply-btn">Send Reply</button>
            </div>

            <!-- Admin reply display -->
            <div class="admin-reply" style="display:none;">
                <p><strong>Admin Reply:</strong> <span class="reply-content"></span></p>
            </div>

            <button class="delete-btn">Delete</button>
        `;

        document.getElementById('message-requests').appendChild(messageRequest);
        document.getElementById('contact-form').reset();
    });

    // Reply and delete button functionality
    document.getElementById('message-requests').addEventListener('click', function(event) {
        if (event.target.classList.contains('reply-btn')) {
            const messageRequest = event.target.closest('.message-request');
            const replyInput = messageRequest.querySelector('.reply-input').value;
            const replyDisplay = messageRequest.querySelector('.admin-reply');
            const replyContent = messageRequest.querySelector('.reply-content');

            if (replyInput.trim() !== "") {
                replyContent.textContent = replyInput;
                replyDisplay.style.display = 'block';
                messageRequest.querySelector('.reply-input').value = '';
            }
        }

        if (event.target.classList.contains('delete-btn')) {
            const messageRequest = event.target.closest('.message-request');
            messageRequest.remove();
        }
    });

});
