

import { Suspense } from "react";
import dynamic from "next/dynamic";
const ContactUs = dynamic(() => import("./contents/ContactUs"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

const ContactUsPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <ContactUs />
            </div>
        </Suspense>
    );
}

export default ContactUsPage;