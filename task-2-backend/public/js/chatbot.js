/**
 * Home Staff Services Pakistan - Professional Chatbot
 * Comprehensive AI Assistant with full site knowledge
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Chatbot initializing...');
    
    const chatbotWindow = document.getElementById('chat-window');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const minimizeBtn = document.getElementById('chatbot-minimize');
    const sendBtn = document.getElementById('chatbot-send');
    const input = document.getElementById('chat-input');
    const messagesContainer = document.getElementById('chat-messages');
    const suggestionsContainer = document.getElementById('quick-actions');
    const notificationBadge = document.getElementById('notification-badge');

    console.log('Chatbot elements:', {
        chatbotWindow: !!chatbotWindow,
        chatbotToggle: !!chatbotToggle,
        minimizeBtn: !!minimizeBtn,
        sendBtn: !!sendBtn,
        input: !!input,
        messagesContainer: !!messagesContainer,
        suggestionsContainer: !!suggestionsContainer,
        notificationBadge: !!notificationBadge
    });

    // Comprehensive Site Knowledge Base
    const siteData = {
        services: {
            maid: {
                title: "Maid Service",
                icon: "fa-broom",
                description: "Professional maids for cleaning, washing, ironing, and daily household chores.",
                types: ["Part-time Maid (4-8 hours)", "Full-time Maid", "Live-in Maid"],
                priceRange: "PKR 15,000 - 25,000/month",
                areas: "All household chores, deep cleaning, laundry, ironing",
                verification: "Background checked, police verified"
            },
            babysitter: {
                title: "Babysitter/Nanny Service",
                icon: "fa-baby",
                description: "Trained babysitters ensuring complete care, safety, and attention for children.",
                types: ["Newborn Care Specialist", "Infant Care", "Toddler Care", "Live-in Nanny"],
                priceRange: "PKR 20,000 - 35,000/month",
                areas: "Feeding, bathing, educational activities, sleep training",
                verification: "CPR & First Aid trained, background checked"
            },
            cook: {
                title: "Cook/Chef Service",
                icon: "fa-utensils",
                description: "Experienced cooks preparing hygienic, delicious meals according to your taste.",
                types: ["Pakistani Cuisine", "Continental", "Chinese", "Vegetarian Specialist"],
                priceRange: "PKR 18,000 - 30,000/month",
                areas: "Meal planning, grocery management, kitchen hygiene",
                verification: "Health certificate, cooking skills tested"
            },
            driver: {
                title: "Driver Service",
                icon: "fa-car",
                description: "Professional, punctual, and verified drivers for safe and comfortable travel.",
                types: ["Personal Driver", "Family Driver", "Office Driver", "Temporary Driver"],
                priceRange: "PKR 25,000 - 40,000/month",
                areas: "Local driving, outstation, school pickup/drop",
                verification: "License verified, driving test passed, background checked"
            },
            security: {
                title: "Security Guard Service",
                icon: "fa-shield-alt",
                description: "Trained guards ensuring safety and protection for your home or property.",
                types: ["Armed Guards", "Unarmed Guards", "Residential Security", "Commercial Security"],
                priceRange: "PKR 22,000 - 35,000/month",
                areas: "24/7 monitoring, patrol services, emergency response",
                verification: "Security training, police clearance, physical fitness"
            },
            patient: {
                title: "Patient Care Service",
                icon: "fa-hand-holding-medical",
                description: "Compassionate caregivers providing support for patients and elderly individuals.",
                types: ["Elderly Care", "Post-surgery Care", "Bedridden Patient Care", "Home Nurse"],
                priceRange: "PKR 20,000 - 35,000/month",
                areas: "Medication management, mobility support, personal hygiene",
                verification: "Medical training, first aid certified, experience verified"
            },
            helper: {
                title: "Helper Service",
                icon: "fa-hands-helping",
                description: "General helpers assisting in household tasks and daily routine work.",
                types: ["House Helper", "Office Helper", "Garden Helper", "Maintenance Helper"],
                priceRange: "PKR 14,000 - 22,000/month",
                areas: "Cleaning, organizing, errands, basic maintenance",
                verification: "Background checked, reference verified"
            }
        },
        
        cities: {
            islamabad: {
                name: "Islamabad",
                areas: "F-6, F-7, F-8, F-10, F-11, G-6, G-7, G-8, G-9, G-10, G-11, E-7, E-11, D-12, D-13, I-8, I-9, I-10, Gulberg Greens, B-17 Multi Gardens",
                coverage: "All sectors and suburbs"
            },
            rawalpindi: {
                name: "Rawalpindi",
                areas: "Saddar, Satellite Town, Westridge, Bahria Town, DHA, Gulraiz, Chaklala Scheme 3, Adiala Road, Airport Society",
                coverage: "All major areas and cantonment"
            }
        },
        
        process: {
            steps: [
                "Contact us via WhatsApp/Phone with your requirements",
                "We share verified staff profiles matching your needs",
                "You interview the selected candidates",
                "Background verification and documents check",
                "Hire instantly with replacement guarantee"
            ],
            time: "Same day availability in most cases",
            guarantee: "7-day replacement guarantee if not satisfied"
        },
        
        verification: {
            steps: [
                "CNIC Verification (NADRA check)",
                "Police Clearance Certificate",
                "Previous Employment Reference Check",
                "Medical Fitness Certificate",
                "Skills Assessment Test",
                "In-person Interview by our team"
            ],
            safety: "We prioritize your family's safety above everything"
        },
        
        contact: {
            phone: "0317 7799786",
            whatsapp: "0317 7799786",
            email: "info@homestaff.pk",
            hours: "9:00 AM - 9:00 PM (7 days a week)",
            response: "Usually within 15 minutes"
        },
        
        whyUs: [
            "100% Verified & Background Checked Staff",
            "Quick Response (Within 15 mins)",
            "Replacement Guarantee",
            "Trained & Experienced Professionals",
            "Available in 5 Major Cities",
            "Easy WhatsApp Communication",
            "No Hidden Charges"
        ]
    };

    // Enhanced Response Logic
    const botResponses = {
        greeting: {
            keywords: ['hello', 'hi', 'hey', 'assalam', 'salam', 'aoa', 'good morning', 'good evening', 'how are you'],
            response: () => {
                return `👋 <strong>Assalam-o-Alaikum!</strong><br><br>
                Welcome to <strong>Home Staff Services Pakistan</strong>! 🇵🇰<br>
                We provide verified maids, babysitters, cooks, drivers, and more across Islamabad and Rawalpindi.<br><br>
                How can I help you today? You can ask me about:<br>
                • Our Services (Maid, Babysitter, Cook, etc.)<br>
                • Pricing & Packages<br>
                • Areas We Cover<br>
                • Verification Process<br>
                • Or directly hire staff`;
            }
        },
        
        services: {
            keywords: ['services', 'service', 'what do you offer', 'available', 'provide', 'kya service', 'konsi service'],
            response: () => {
                let html = `<strong>🏠 We offer 7 Professional Home Services:</strong><br><br>`;
                
                for (let [key, service] of Object.entries(siteData.services)) {
                    html += `<div style="background:#f8f9fa; padding:10px; margin:8px 0; border-radius:8px; border-left:4px solid #667eea;">
                        <strong><i class="fas ${service.icon}"></i> ${service.title}</strong><br>
                        <small>${service.description}</small><br>
                        <small style="color:#667eea;"><strong>${service.priceRange}</strong></small>
                    </div>`;
                }
                
                html += `<br>Which service would you like to know more about?`;
                return html;
            }
        },
        
        specificService: {
            keywords: ['maid', 'safai', 'safaai', 'babysitter', 'nanny', 'baby', 'cook', 'khana', 'chef', 'driver', 'gaari', 'security', 'guard', 'patient', 'nurse', 'helper', 'helper'],
            response: (msg) => {
                const lowerMsg = msg.toLowerCase();
                let serviceKey = null;
                
                if (lowerMsg.includes('maid') || lowerMsg.includes('safai')) serviceKey = 'maid';
                else if (lowerMsg.includes('baby') || lowerMsg.includes('nanny')) serviceKey = 'babysitter';
                else if (lowerMsg.includes('cook') || lowerMsg.includes('chef') || lowerMsg.includes('khana')) serviceKey = 'cook';
                else if (lowerMsg.includes('driver') || lowerMsg.includes('gaari')) serviceKey = 'driver';
                else if (lowerMsg.includes('security') || lowerMsg.includes('guard')) serviceKey = 'security';
                else if (lowerMsg.includes('patient') || lowerMsg.includes('nurse')) serviceKey = 'patient';
                else if (lowerMsg.includes('helper')) serviceKey = 'helper';
                
                if (serviceKey && siteData.services[serviceKey]) {
                    const s = siteData.services[serviceKey];
                    return `<strong>${s.title}</strong> ${s.icon}<br><br>
                    📝 <strong>Description:</strong> ${s.description}<br><br>
                    🕐 <strong>Available Types:</strong><br>• ${s.types.join('<br>• ')}<br><br>
                    💰 <strong>Price Range:</strong> ${s.priceRange}<br><br>
                    ✅ <strong>Verification:</strong> ${s.verification}<br><br>
                    📍 <strong>Coverage:</strong> Available in Islamabad and Rawalpindi<br><br>
                    <a href="https://wa.me/923177799786?text=Hi, I'm interested in ${s.title}" target="_blank" style="background:#25d366; color:white; padding:10px 20px; border-radius:20px; text-decoration:none; display:inline-block; margin-top:10px;">
                        <i class="fab fa-whatsapp"></i> Get Quote on WhatsApp
                    </a>`;
                }
                return null;
            }
        },
        
        pricing: {
            keywords: ['price', 'pricing', 'cost', 'rate', 'kitne', 'charges', 'salary', 'pesa', 'paisa', 'budget'],
            response: () => {
                return `<strong>💰 Pricing Overview (Monthly):</strong><br><br>
                🧹 <strong>Maid Service:</strong> PKR 15,000 - 25,000<br>
                👶 <strong>Babysitter:</strong> PKR 20,000 - 35,000<br>
                👨‍🍳 <strong>Cook/Chef:</strong> PKR 18,000 - 30,000<br>
                🚗 <strong>Driver:</strong> PKR 25,000 - 40,000<br>
                🛡️ <strong>Security Guard:</strong> PKR 22,000 - 35,000<br>
                🏥 <strong>Patient Care:</strong> PKR 20,000 - 35,000<br>
                🤝 <strong>Helper:</strong> PKR 14,000 - 22,000<br><br>
                
                <strong>🎯 Factors affecting price:</strong><br>
                • Live-in vs Part-time<br>
                • Experience level<br>
                • Specific skills required<br>
                • Location<br><br>
                
                <em>💡 Exact quote depends on your specific requirements. Chat with us for detailed pricing!</em>`;
            }
        },
        
        cities: {
            keywords: ['city', 'cities', 'location', 'area', 'kahan', 'kidhar', 'islamabad', 'rawalpindi'],
            response: (msg) => {
                const lowerMsg = msg.toLowerCase();
                
                // Check for specific city
                for (let [key, city] of Object.entries(siteData.cities)) {
                    if (lowerMsg.includes(key) || lowerMsg.includes(city.name.toLowerCase())) {
                        return `<strong>📍 ${city.name} Coverage</strong><br><br>
                        <strong>Areas we serve:</strong><br>${city.areas}<br><br>
                        ${city.coverage}<br><br>
                        All services available here with same-day response!`;
                    }
                }
                
                // General city response
                return `<strong>🌍 We Serve 2 Major Cities:</strong><br><br>
                🏛️ <strong>Islamabad</strong> - All sectors (F, G, E, I, D-12)<br>
                🏘️ <strong>Rawalpindi</strong> - Saddar, Bahria Town, DHA, and all major areas<br><br>
                
                Which city are you in? I can show you specific coverage areas!`;
            }
        },
        
        process: {
            keywords: ['how to hire', 'process', 'steps', 'book', 'hire', 'kaise', 'booking', 'procedure'],
            response: () => {
                return `<strong>🎯 How to Hire - 3 Easy Steps:</strong><br><br>
                ${siteData.process.steps.map((step, index) => 
                    `${index + 1}️⃣ ${step}`
                ).join('<br><br>')}<br><br>
                
                ⏱️ <strong>Response Time:</strong> ${siteData.process.time}<br>
                🛡️ <strong>Guarantee:</strong> ${siteData.process.guarantee}<br><br>
                
                Ready to hire? Click below to start!`;
            }
        },
        
        verification: {
            keywords: ['verify', 'verification', 'safe', 'trust', 'security', 'background', 'check', 'pakka', 'confirmed'],
            response: () => {
                return `<strong>🔒 Our 6-Step Verification Process:</strong><br><br>
                ${siteData.verification.steps.map((step, index) => 
                    `✅ ${step}`
                ).join('<br>')}<br><br>
                
                <strong>${siteData.verification.safety}</strong><br><br>
                
                <em>We never compromise on your family's safety!</em>`;
            }
        },
        
        whyUs: {
            keywords: ['why', 'best', 'difference', 'choose', 'kyun', 'acha', 'better'],
            response: () => {
                return `<strong>⭐ Why Choose Home Staff Services?</strong><br><br>
                ${siteData.whyUs.map(item => `✓ ${item}`).join('<br>')}<br><br>
                
                🏆 <strong>Trusted by 1000+ families across Pakistan!</strong>`;
            }
        },
        
        contact: {
            keywords: ['contact', 'phone', 'number', 'whatsapp', 'email', 'call', 'reach', 'rabta'],
            response: () => {
                return `<strong>📞 Contact Us:</strong><br><br>
                📱 <strong>WhatsApp:</strong> <a href="https://wa.me/923177799786" style="color:#25d366; text-decoration:none; font-weight:bold;">0317 7799786</a><br>
                ☎️ <strong>Phone:</strong> 0317 7799786<br>
                ✉️ <strong>Email:</strong> info@homestaff.pk<br><br>
                
                🕐 <strong>Working Hours:</strong> 9:00 AM - 9:00 PM (7 days a week)<br>
                ⚡ <strong>Response Time:</strong> Usually within 15 minutes<br><br>
                
                <a href="https://wa.me/923177799786?text=Hi, I need home staff services" target="_blank" style="background:#25d366; color:white; padding:12px 24px; border-radius:25px; text-decoration:none; display:inline-block; font-weight:bold;">
                    <i class="fab fa-whatsapp"></i> Chat on WhatsApp Now
                </a>`;
            }
        },
        
        time: {
            keywords: ['time', 'hours', 'kitne baje', 'availability', 'response', 'jaldi'],
            response: () => {
                return `🕐 <strong>Our Working Hours:</strong><br><br>
                We're available <strong>9:00 AM to 9:00 PM</strong>, 7 days a week!<br><br>
                
                ⚡ <strong>Quick Response:</strong> We usually reply within 15 minutes during business hours.<br><br>
                
                🚨 <strong>Emergency Services:</strong> Available 24/7 for urgent requirements!`;
            }
        },
        
        default: {
            response: () => {
                return `I'm not sure I understood. 🤔<br><br>
                You can ask me about:<br>
                • <strong>Services</strong> - Maid, Babysitter, Cook, Driver, etc.<br>
                • <strong>Pricing</strong> - Cost and packages<br>
                • <strong>Cities</strong> - Where we operate<br>
                • <strong>How to Hire</strong> - Booking process<br>
                • <strong>Safety</strong> - Verification process<br>
                • <strong>Contact</strong> - Phone/WhatsApp details<br><br>
                
                Or simply type the service name you need!`;
            }
        }
    };

    // Helper Functions
    function addMessage(text, isUser = false) {
        if (!messagesContainer) {
            console.error('Messages container not found');
            return;
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        if (!isUser) {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-bubble">
                    <div class="message-text">${text}</div>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-bubble user-bubble">
                    <div class="message-text">${text}</div>
                </div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        if (isUser && suggestionsContainer) {
            suggestionsContainer.style.display = 'none';
        }
    }

    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator-container';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function removeTyping() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }

    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Check for specific service first
        const specificResponse = botResponses.specificService.response(userMessage);
        if (specificResponse) return specificResponse;
        
        // Check other categories
        for (let category in botResponses) {
            if (category === 'default' || category === 'specificService') continue;
            
            const categoryData = botResponses[category];
            if (categoryData.keywords) {
                for (let keyword of categoryData.keywords) {
                    if (lowerMessage.includes(keyword)) {
                        return categoryData.response();
                    }
                }
            }
        }
        
        return botResponses.default.response();
    }

    function sendMessage() {
        if (!input) return;
        
        const message = input.value.trim();
        
        if (!message) return;
        
        console.log('Sending message:', message);
        
        addMessage(message, true);
        input.value = '';
        
        showTyping();
        
        setTimeout(() => {
            removeTyping();
            const response = getBotResponse(message);
            addMessage(response, false);
            
            // Show suggestions again after response
            if (suggestionsContainer) {
                setTimeout(() => {
                    suggestionsContainer.style.display = 'flex';
                }, 1000);
            }
            
            // Show notification badge if minimized
            if (chatbotWindow.classList.contains('hidden') && notificationBadge) {
                notificationBadge.style.display = 'flex';
                notificationBadge.textContent = parseInt(notificationBadge.textContent || 0) + 1;
            }
        }, 800 + Math.random() * 500); // Random delay for natural feel
    }

    // ========== Event Listeners ==========
    
    // Toggle functionality
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            console.log('Chat toggle clicked');
            if (chatbotWindow) {
                chatbotWindow.classList.remove('hidden');
                chatbotToggle.style.pointerEvents = 'none';
                chatbotToggle.style.opacity = '0';
                if (notificationBadge) {
                    notificationBadge.style.display = 'none';
                }
                if (input) {
                    setTimeout(() => input.focus(), 100);
                }
            }
        });
    }

    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', function() {
            console.log('Minimize button clicked');
            if (chatbotWindow) {
                chatbotWindow.classList.add('hidden');
                chatbotToggle.style.pointerEvents = 'auto';
                chatbotToggle.style.opacity = '1';
                if (notificationBadge) {
                    notificationBadge.style.display = 'flex';
                }
            }
        });
    }

    // Send message
    if (sendBtn) {
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Send button clicked');
            sendMessage();
        });
    } else {
        console.warn('Send button not found');
    }

    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    } else {
        console.warn('Input field not found');
    }

    // Quick buttons / Suggestion buttons
    const suggestionBtns = document.querySelectorAll('.quick-btn');
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const reply = this.getAttribute('data-reply');
            if (reply) {
                input.value = reply;
                sendMessage();
            }
        });
    });

    // Auto-open chatbot with welcome message on first visit
    setTimeout(() => {
        if (!localStorage.getItem('chatbotWelcome')) {
            console.log('First visit - auto-opening chatbot');
            if (chatbotWindow) {
                chatbotWindow.classList.remove('hidden');
                chatbotToggle.style.pointerEvents = 'none';
                chatbotToggle.style.opacity = '0';
                if (notificationBadge) {
                    notificationBadge.style.display = 'none';
                }
                // Add welcome greeting message
                addMessage(botResponses.greeting.response(), false);
                localStorage.setItem('chatbotWelcome', 'true');
            }
        }
    }, 1500);
});