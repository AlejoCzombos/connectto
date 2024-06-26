import json from "../data/footer.json"

export default function WhatsAppMessageEncoder(message) {
    const encodedMessage = encodeURIComponent(message); 
    const url = `https://wa.me/?phone=549${json.contact.WhatsApp}&text=${encodedMessage}&type=phone_number`;
    return url
}