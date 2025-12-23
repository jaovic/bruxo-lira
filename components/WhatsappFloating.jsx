"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloating() {
	return (
		<a
			href="https://wa.me/+5531975113397"
			target="_blank"
			aria-label="Contato WhatsApp"
			className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-16 h-16 rounded-full
        bg-[#25D366]
        shadow-[0_0_35px_rgba(37,211,102,0.9)]
        hover:scale-110 transition
        animate-pulse
      "
		>
			<FaWhatsapp size={34} color="#000" />
		</a>
	);
}
