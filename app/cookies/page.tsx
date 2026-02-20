import AuxiliaryPage from "../components/AuxiliaryPageTemplate";

export default function CookiesPage() {
    return (
        <AuxiliaryPage title="Cookie Policy">
            <div className="prose dark:prose-invert">
                <p>This Cookie Policy explains how MPR Chicken uses cookies and similar technologies to recognize you when you visit our website.</p>

                <h3>What are cookies?</h3>
                <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website.</p>

                <h3>How we use cookies</h3>
                <ul>
                    <li><strong>Essential:</strong> Required for the website to function (e.g. login session).</li>
                    <li><strong>Functional:</strong> Remember your preferences (e.g. favorite menu items).</li>
                    <li><strong>Analytical:</strong> Help us understand how you use the site.</li>
                </ul>
            </div>
        </AuxiliaryPage>
    );
}
