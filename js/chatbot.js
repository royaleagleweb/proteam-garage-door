/* ========================================
   ProTeam Garage Door - Customer Service Chatbot
   ======================================== */

(function () {
    'use strict';

    var BUSINESS_PHONE = '(954) 555-1234';
    var BUSINESS_EMAIL = 'info@proteamgaragedoor.com';
    var BUSINESS_HOURS = 'Mon-Sat: 7AM-7PM';

    var FAQ_RESPONSES = {
        greeting: {
            text: "Hi there! I'm the ProTeam Garage Door virtual assistant. How can I help you today?",
            options: [
                'Get a free estimate',
                'Emergency repair',
                'Services we offer',
                'Door styles',
                'Financing options',
                'Current specials'
            ]
        },
        'get a free estimate': {
            text: "We'd love to give you a free, no-obligation estimate! You can:\n\n" +
                  "- Call us at " + BUSINESS_PHONE + "\n" +
                  "- Fill out our contact form\n" +
                  "- Or tell me what service you need and I'll point you in the right direction.",
            options: ['New door installation', 'Door repair', 'Spring replacement', 'Hurricane doors', 'Contact form'],
            link: { text: 'Go to Contact Form', url: 'contact.html' }
        },
        'emergency repair': {
            text: "We offer 24/7 emergency garage door repair across Broward and Palm Beach County. For immediate assistance, please call us right away at " + BUSINESS_PHONE + ". A technician can typically arrive within 1 hour.",
            options: ['Door won\'t open', 'Broken spring', 'Door off track', 'Other services'],
            link: { text: 'Call Now: ' + BUSINESS_PHONE, url: 'tel:+19545551234' }
        },
        'services we offer': {
            text: "We provide a full range of garage door services:\n\n" +
                  "- Garage Door Installation\n" +
                  "- Garage Door Repair\n" +
                  "- Opener Systems\n" +
                  "- Spring Replacement\n" +
                  "- Hurricane-Rated Doors\n" +
                  "- Commercial Garage Doors\n" +
                  "- Preventive Maintenance\n\n" +
                  "Which service are you interested in?",
            options: ['New door installation', 'Door repair', 'Opener systems', 'Spring replacement', 'Hurricane doors', 'Commercial doors']
        },
        'service areas': {
            text: "We proudly serve all of Broward County and Palm Beach County, including:\n\n" +
                  "Fort Lauderdale, Boca Raton, Coral Springs, Pompano Beach, West Palm Beach, Hollywood, Plantation, Davie, Weston, Deerfield Beach, Delray Beach, Sunrise, Parkland, Wellington, Jupiter, Palm Beach Gardens, and more!",
            options: ['Get a free estimate', 'Services we offer', 'Hours & contact info']
        },
        'hours & contact info': {
            text: "Here's how to reach us:\n\n" +
                  "Phone: " + BUSINESS_PHONE + "\n" +
                  "Email: " + BUSINESS_EMAIL + "\n" +
                  "Hours: " + BUSINESS_HOURS + "\n" +
                  "Emergency Service: Available 24/7\n\n" +
                  "We're a licensed and insured Florida contractor with over 20 years of experience.",
            options: ['Get a free estimate', 'Services we offer', 'Emergency repair'],
            link: { text: 'Call Now: ' + BUSINESS_PHONE, url: 'tel:+19545551234' }
        },
        'new door installation': {
            text: "We install all major brands including Clopay, Amarr, Wayne Dalton, C.H.I., and Raynor. Whether you need a single residential door or a multi-bay commercial setup, we handle it all.\n\nOur installations include:\n- Free on-site measurement\n- Removal of your old door\n- Professional installation\n- Full warranty coverage",
            options: ['Get a free estimate', 'Hurricane doors', 'View installation page'],
            link: { text: 'Learn About Installation', url: 'services/garage-door-installation.html' }
        },
        'door repair': {
            text: "We repair all types and brands of garage doors. Common repairs include:\n\n" +
                  "- Broken springs\n" +
                  "- Damaged panels\n" +
                  "- Off-track doors\n" +
                  "- Noisy operation\n" +
                  "- Sensor alignment\n" +
                  "- Cable replacement\n\n" +
                  "Most repairs are completed in a single visit!",
            options: ['Emergency repair', 'Get a free estimate', 'Spring replacement'],
            link: { text: 'Learn About Repairs', url: 'services/garage-door-repair.html' }
        },
        'opener systems': {
            text: "We install and repair all major opener brands including LiftMaster, Chamberlain, and Genie. We offer:\n\n" +
                  "- Belt-drive (ultra-quiet)\n" +
                  "- Chain-drive (reliable & affordable)\n" +
                  "- Wall-mount (space-saving)\n" +
                  "- Smart openers with WiFi & phone control",
            options: ['Get a free estimate', 'Services we offer', 'View openers page'],
            link: { text: 'Learn About Openers', url: 'services/garage-door-openers.html' }
        },
        'spring replacement': {
            text: "Broken garage door spring? Don't try to fix it yourself — springs are under extreme tension and can be dangerous.\n\nWe offer same-day spring replacement with high-cycle springs that last longer. We replace both torsion and extension springs.",
            options: ['Emergency repair', 'Get a free estimate', 'Door repair'],
            link: { text: 'Learn About Springs', url: 'services/spring-replacement.html' }
        },
        'hurricane doors': {
            text: "Living in South Florida means hurricane preparedness is essential. Our hurricane-rated garage doors:\n\n" +
                  "- Withstand winds up to 180+ mph\n" +
                  "- Meet Miami-Dade HVHZ standards\n" +
                  "- Can lower your insurance premiums\n" +
                  "- Boost your property value up to 194% ROI\n\n" +
                  "We can help you choose the right wind-rated door for your home.",
            options: ['Get a free estimate', 'New door installation', 'View hurricane page'],
            link: { text: 'Learn About Hurricane Doors', url: 'services/hurricane-garage-doors.html' }
        },
        'commercial doors': {
            text: "We service and install commercial garage doors including:\n\n" +
                  "- Rolling steel doors\n" +
                  "- Sectional overhead doors\n" +
                  "- High-speed doors\n" +
                  "- Fire-rated doors\n" +
                  "- Loading dock equipment\n\n" +
                  "We work with warehouses, auto shops, restaurants, and businesses of all sizes.",
            options: ['Get a free estimate', 'Services we offer'],
            link: { text: 'Learn About Commercial Doors', url: 'services/commercial-garage-doors.html' }
        },
        'door won\'t open': {
            text: "A door that won't open can be caused by several things:\n\n" +
                  "- Broken spring (most common)\n" +
                  "- Opener malfunction\n" +
                  "- Blocked safety sensors\n" +
                  "- Broken cable\n" +
                  "- Power outage\n\n" +
                  "Try checking your sensors and remote batteries first. If it's still stuck, call us for fast service!",
            options: ['Emergency repair', 'Spring replacement', 'Get a free estimate'],
            link: { text: 'Call Now: ' + BUSINESS_PHONE, url: 'tel:+19545551234' }
        },
        'broken spring': {
            text: "A broken spring is the #1 reason garage doors stop working. Warning signs include:\n\n" +
                  "- Loud bang from the garage\n" +
                  "- Door feels very heavy\n" +
                  "- Door only opens a few inches\n" +
                  "- Visible gap in the spring\n\n" +
                  "Never try to operate a door with a broken spring. Call us for safe, same-day replacement!",
            options: ['Emergency repair', 'Spring replacement', 'Get a free estimate'],
            link: { text: 'Call Now: ' + BUSINESS_PHONE, url: 'tel:+19545551234' }
        },
        'door off track': {
            text: "A door that's come off its track needs professional attention right away. Don't force it — you could cause more damage or injury.\n\nOur technicians can usually get your door back on track in under an hour.",
            options: ['Emergency repair', 'Door repair', 'Get a free estimate'],
            link: { text: 'Call Now: ' + BUSINESS_PHONE, url: 'tel:+19545551234' }
        },
        'other services': {
            text: "We also offer:\n\n" +
                  "- Preventive maintenance plans\n" +
                  "- Garage door tune-ups\n" +
                  "- Weather seal replacement\n" +
                  "- Panel replacement\n" +
                  "- Keypad & remote programming\n\n" +
                  "What else can I help you with?",
            options: ['Get a free estimate', 'Services we offer', 'Hours & contact info']
        },
        'contact form': {
            text: "I'll take you to our contact form where you can request a free estimate. Just fill in your details and we'll get back to you promptly!",
            options: ['Services we offer', 'Hours & contact info'],
            link: { text: 'Go to Contact Form', url: 'contact.html' }
        },
        'view installation page': {
            text: "I'll direct you to our installation page for more details!",
            options: ['Get a free estimate', 'Services we offer'],
            link: { text: 'View Installation Page', url: 'services/garage-door-installation.html' }
        },
        'view openers page': {
            text: "Check out our openers page for all the details!",
            options: ['Get a free estimate', 'Services we offer'],
            link: { text: 'View Openers Page', url: 'services/garage-door-openers.html' }
        },
        'view hurricane page': {
            text: "Head to our hurricane doors page for full details!",
            options: ['Get a free estimate', 'Services we offer'],
            link: { text: 'View Hurricane Doors Page', url: 'services/hurricane-garage-doors.html' }
        },
        'door styles': {
            text: "We offer a wide range of garage door styles to match any home:\n\n" +
                  "- Modern & Contemporary (aluminum/glass)\n" +
                  "- Traditional Raised Panel\n" +
                  "- Carriage House\n" +
                  "- Mediterranean\n" +
                  "- Wood-Look Composite\n" +
                  "- Impact Glass (full-view)\n" +
                  "- Custom Designs\n" +
                  "- Flush Panel\n\n" +
                  "We're a Clopay Master Authorized Dealer and also carry Amarr, Wayne Dalton, C.H.I., and Raynor.",
            options: ['Get a free estimate', 'Hurricane doors', 'View styles page'],
            link: { text: 'Browse Door Styles', url: 'garage-door-styles.html' }
        },
        'view styles page': {
            text: "Check out our full gallery of garage door styles!",
            options: ['Get a free estimate', 'Services we offer'],
            link: { text: 'View Styles Page', url: 'garage-door-styles.html' }
        },
        'financing options': {
            text: "We offer flexible financing to make your new garage door affordable:\n\n" +
                  "- 0% interest if paid within 18 months\n" +
                  "- Quick same-day approval\n" +
                  "- No prepayment penalties\n" +
                  "- Available on installations $1,000+\n\n" +
                  "A new garage door can return up to 194% ROI and may lower your insurance premiums!",
            options: ['Get a free estimate', 'Door styles', 'View financing page'],
            link: { text: 'Learn About Financing', url: 'financing.html' }
        },
        'view financing page': {
            text: "I'll take you to our financing page for all the details!",
            options: ['Get a free estimate', 'Services we offer'],
            link: { text: 'View Financing Page', url: 'financing.html' }
        },
        'current specials': {
            text: "We have several promotions running right now:\n\n" +
                  "- $50 off any new door installation\n" +
                  "- Free keypad with opener purchase\n" +
                  "- $25 off garage door tune-up\n" +
                  "- 10% off hurricane-rated door upgrades\n" +
                  "- Buy one spring, get 2nd free\n" +
                  "- Senior & military 10% discount\n\n" +
                  "Mention the promotion when scheduling!",
            options: ['Get a free estimate', 'Financing options', 'View specials page'],
            link: { text: 'View All Specials', url: 'specials.html' }
        },
        'view specials page': {
            text: "Check out our current deals and promotions!",
            options: ['Get a free estimate', 'Services we offer'],
            link: { text: 'View Specials Page', url: 'specials.html' }
        },
        'parts accessories': {
            text: "We stock a full inventory of garage door parts and accessories:\n\n" +
                  "- Remotes & wireless keypads\n" +
                  "- Springs, cables & rollers\n" +
                  "- Weather seals & bottom seals\n" +
                  "- Panels & track hardware\n" +
                  "- Smart home WiFi modules\n" +
                  "- LiftMaster & Chamberlain accessories\n\n" +
                  "Most parts available same-day!",
            options: ['Opener systems', 'Door repair', 'View parts page'],
            link: { text: 'Browse Parts & Accessories', url: 'parts-accessories.html' }
        },
        'view parts page': {
            text: "Head to our parts page for the full inventory!",
            options: ['Get a free estimate', 'Services we offer'],
            link: { text: 'View Parts Page', url: 'parts-accessories.html' }
        },
        'faq': {
            text: "Our FAQ & Support Center has answers to common questions about:\n\n" +
                  "- Garage door troubleshooting\n" +
                  "- Opener & remote programming\n" +
                  "- Maintenance tips\n" +
                  "- Installation process\n" +
                  "- Safety guidelines\n\n" +
                  "Or just ask me — I might have the answer!",
            options: ['Door won\'t open', 'Broken spring', 'Opener systems', 'View FAQ page'],
            link: { text: 'Visit FAQ Center', url: 'faq.html' }
        },
        'view faq page': {
            text: "I'll take you to our full FAQ & Support Center!",
            options: ['Get a free estimate', 'Services we offer'],
            link: { text: 'View FAQ Page', url: 'faq.html' }
        }
    };

    var FALLBACK = {
        text: "I'm not sure I understand that. Let me connect you with the right resource. You can:\n\n" +
              "- Call us at " + BUSINESS_PHONE + " to speak with a team member\n" +
              "- Or choose from the options below.",
        options: ['Get a free estimate', 'Services we offer', 'Emergency repair', 'Hours & contact info']
    };

    // Resolve relative URLs based on page depth
    function resolveUrl(url) {
        if (url.startsWith('tel:') || url.startsWith('http')) return url;
        var depth = 0;
        var path = window.location.pathname;
        var parts = path.replace(/\/+$/, '').split('/').filter(Boolean);
        // If we're in a subdirectory (locations/, services/), go up one level
        if (parts.length >= 2) {
            var dir = parts[parts.length - 2];
            if (dir === 'locations' || dir === 'services') {
                return '../' + url;
            }
        }
        return url;
    }

    function createChatbot() {
        // Chat toggle button
        var toggle = document.createElement('button');
        toggle.className = 'chatbot-toggle';
        toggle.setAttribute('aria-label', 'Open chat');
        toggle.innerHTML = '<i class="fas fa-comments"></i>';

        // Chat window
        var chatWindow = document.createElement('div');
        chatWindow.className = 'chatbot-window';
        chatWindow.innerHTML =
            '<div class="chatbot-header">' +
                '<div class="chatbot-header-info">' +
                    '<div class="chatbot-avatar"><i class="fas fa-headset"></i></div>' +
                    '<div>' +
                        '<strong>ProTeam Assistant</strong>' +
                        '<span class="chatbot-status"><span class="chatbot-status-dot"></span> Online</span>' +
                    '</div>' +
                '</div>' +
                '<button class="chatbot-close" aria-label="Close chat"><i class="fas fa-times"></i></button>' +
            '</div>' +
            '<div class="chatbot-messages" id="chatbot-messages"></div>' +
            '<div class="chatbot-input-area">' +
                '<input type="text" class="chatbot-input" id="chatbot-input" placeholder="Type a message..." autocomplete="off">' +
                '<button class="chatbot-send" id="chatbot-send" aria-label="Send"><i class="fas fa-paper-plane"></i></button>' +
            '</div>';

        document.body.appendChild(toggle);
        document.body.appendChild(chatWindow);

        var messagesContainer = document.getElementById('chatbot-messages');
        var input = document.getElementById('chatbot-input');
        var sendBtn = document.getElementById('chatbot-send');
        var closeBtn = chatWindow.querySelector('.chatbot-close');
        var isOpen = false;
        var hasGreeted = false;

        function toggleChat() {
            isOpen = !isOpen;
            chatWindow.classList.toggle('open', isOpen);
            toggle.classList.toggle('open', isOpen);
            if (isOpen) {
                toggle.innerHTML = '<i class="fas fa-times"></i>';
                if (!hasGreeted) {
                    hasGreeted = true;
                    setTimeout(function () { addBotMessage(FAQ_RESPONSES.greeting); }, 400);
                }
                setTimeout(function () { input.focus(); }, 300);
            } else {
                toggle.innerHTML = '<i class="fas fa-comments"></i>';
            }
        }

        toggle.addEventListener('click', toggleChat);
        closeBtn.addEventListener('click', toggleChat);

        function addBotMessage(response) {
            var wrapper = document.createElement('div');
            wrapper.className = 'chatbot-msg chatbot-msg-bot';

            var bubble = document.createElement('div');
            bubble.className = 'chatbot-bubble chatbot-bubble-bot';
            bubble.textContent = response.text;

            wrapper.appendChild(bubble);

            if (response.link) {
                var linkEl = document.createElement('a');
                linkEl.className = 'chatbot-link';
                linkEl.href = resolveUrl(response.link.url);
                linkEl.textContent = response.link.text;
                if (response.link.url.startsWith('tel:')) {
                    linkEl.innerHTML = '<i class="fas fa-phone"></i> ' + response.link.text;
                } else {
                    linkEl.innerHTML = '<i class="fas fa-arrow-right"></i> ' + response.link.text;
                }
                wrapper.appendChild(linkEl);
            }

            if (response.options && response.options.length) {
                var optionsDiv = document.createElement('div');
                optionsDiv.className = 'chatbot-options';
                response.options.forEach(function (opt) {
                    var btn = document.createElement('button');
                    btn.className = 'chatbot-option';
                    btn.textContent = opt;
                    btn.addEventListener('click', function () {
                        handleUserInput(opt);
                    });
                    optionsDiv.appendChild(btn);
                });
                wrapper.appendChild(optionsDiv);
            }

            messagesContainer.appendChild(wrapper);
            scrollToBottom();
        }

        function addUserMessage(text) {
            var wrapper = document.createElement('div');
            wrapper.className = 'chatbot-msg chatbot-msg-user';
            var bubble = document.createElement('div');
            bubble.className = 'chatbot-bubble chatbot-bubble-user';
            bubble.textContent = text;
            wrapper.appendChild(bubble);
            messagesContainer.appendChild(wrapper);
            scrollToBottom();
        }

        function scrollToBottom() {
            setTimeout(function () {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 50);
        }

        function findResponse(input) {
            var lower = input.toLowerCase().trim();

            // Direct match
            if (FAQ_RESPONSES[lower]) return FAQ_RESPONSES[lower];

            // Keyword matching
            var keywords = {
                'estimate': 'get a free estimate',
                'quote': 'get a free estimate',
                'price': 'get a free estimate',
                'cost': 'get a free estimate',
                'free': 'get a free estimate',
                'emergency': 'emergency repair',
                'urgent': 'emergency repair',
                '24/7': 'emergency repair',
                'service': 'services we offer',
                'install': 'new door installation',
                'new door': 'new door installation',
                'repair': 'door repair',
                'fix': 'door repair',
                'broken': 'door repair',
                'opener': 'opener systems',
                'remote': 'opener systems',
                'liftmaster': 'opener systems',
                'spring': 'spring replacement',
                'hurricane': 'hurricane doors',
                'wind': 'hurricane doors',
                'storm': 'hurricane doors',
                'impact': 'hurricane doors',
                'commercial': 'commercial doors',
                'business': 'commercial doors',
                'warehouse': 'commercial doors',
                'area': 'service areas',
                'location': 'service areas',
                'where': 'service areas',
                'city': 'service areas',
                'hour': 'hours & contact info',
                'contact': 'hours & contact info',
                'phone': 'hours & contact info',
                'email': 'hours & contact info',
                'open': 'door won\'t open',
                'stuck': 'door won\'t open',
                'won\'t': 'door won\'t open',
                'track': 'door off track',
                'off track': 'door off track',
                'maintenance': 'other services',
                'tune': 'other services',
                'style': 'door styles',
                'modern': 'door styles',
                'traditional': 'door styles',
                'carriage': 'door styles',
                'mediterranean': 'door styles',
                'wood': 'door styles',
                'glass': 'door styles',
                'flush': 'door styles',
                'financ': 'financing options',
                'payment': 'financing options',
                'afford': 'financing options',
                'interest': 'financing options',
                'special': 'current specials',
                'coupon': 'current specials',
                'deal': 'current specials',
                'discount': 'current specials',
                'promotion': 'current specials',
                'save': 'current specials',
                'part': 'parts accessories',
                'accessor': 'parts accessories',
                'keypad': 'parts accessories',
                'seal': 'parts accessories',
                'roller': 'parts accessories',
                'faq': 'faq',
                'question': 'faq',
                'how do': 'faq',
                'troubleshoot': 'faq',
                'hello': 'greeting',
                'hi': 'greeting',
                'hey': 'greeting',
                'help': 'greeting'
            };

            for (var key in keywords) {
                if (lower.indexOf(key) !== -1) {
                    return FAQ_RESPONSES[keywords[key]];
                }
            }

            return FALLBACK;
        }

        function handleUserInput(text) {
            addUserMessage(text);
            // Disable previous option buttons
            var prevOptions = messagesContainer.querySelectorAll('.chatbot-options');
            prevOptions.forEach(function (opts) {
                opts.querySelectorAll('.chatbot-option').forEach(function (btn) {
                    btn.disabled = true;
                    btn.style.opacity = '0.5';
                    btn.style.cursor = 'default';
                });
            });

            // Typing indicator
            var typing = document.createElement('div');
            typing.className = 'chatbot-msg chatbot-msg-bot';
            typing.innerHTML = '<div class="chatbot-typing"><span></span><span></span><span></span></div>';
            messagesContainer.appendChild(typing);
            scrollToBottom();

            setTimeout(function () {
                messagesContainer.removeChild(typing);
                var response = findResponse(text);
                addBotMessage(response);
            }, 800);
        }

        function submitInput() {
            var text = input.value.trim();
            if (!text) return;
            input.value = '';
            handleUserInput(text);
        }

        sendBtn.addEventListener('click', submitInput);
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') submitInput();
        });

        // Auto-open hint after 5 seconds
        setTimeout(function () {
            if (!isOpen) {
                toggle.classList.add('chatbot-hint');
            }
        }, 5000);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createChatbot);
    } else {
        createChatbot();
    }

})();
