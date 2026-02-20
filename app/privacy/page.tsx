import AuxiliaryPage from "../components/AuxiliaryPageTemplate";

export default function PrivacyPage() {
    return (
        <AuxiliaryPage title="Privacy Policy">
            <div className="prose dark:prose-invert">
                <h3>1. Information We Collect</h3>
                <p>We collect information you provide directly to us (name, email, shipping address) when you create an account or place an order.</p>

                <h3>2. How We Use Information</h3>
                <p>We use your information to process orders, communicate with you about promotions, and improve our services.</p>

                <h3>3. Cookies</h3>
                <p>We use cookies to enhance your experience and remember your preferences. You can manage cookie settings in your browser.</p>

                <h3>4. Data Security</h3>
                <p>We implement industry-standard security measures to protect your personal data from unauthorized access.</p>
            </div>
        </AuxiliaryPage>
    );
}
