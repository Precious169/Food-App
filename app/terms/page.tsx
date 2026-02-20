import AuxiliaryPage from "../components/AuxiliaryPageTemplate";

export default function TermsPage() {
    return (
        <AuxiliaryPage title="Terms of Service">
            <div className="prose dark:prose-invert">
                <h3>1. Acceptance of Terms</h3>
                <p>Welcome to MPR Chicken. By accessing or using our platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>

                <h3>2. Account Responsibility</h3>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                <h3>3. Ordering & Payment</h3>
                <p>All prices are inclusive of VAT where applicable. We reserve the right to change prices and availability without notice. Payments are processed securely via our partners.</p>

                <h3>4. Delivery Policy</h3>
                <p>We aim to deliver within thirty minutes, but delivery times may vary based on conditions beyond our control.</p>
            </div>
        </AuxiliaryPage>
    );
}
