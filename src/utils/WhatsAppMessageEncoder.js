import json from "../data/footer.json"

export default function WhatsAppMessageEncoder(message) {
    const encodedMessage = encodeURIComponent(message); 
    const url = `https://api.whatsapp.com/send/?phone=549${json.contact.WhatsApp}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    return url
}