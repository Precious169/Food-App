import AuxiliaryPage from "../components/AuxiliaryPageTemplate";

export default function DealsPage() {
    return (
        <AuxiliaryPage title="Today's Hot Deals">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gradient-to-r from-primary to-orange-600 p-8 rounded-3xl text-white relative overflow-hidden group">
                    <span className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">LIMITED TIME</span>
                    <h3 className="text-3xl font-black mb-2">Buy One Get One Bucket</h3>
                    <p className="text-white/80 mb-6">Order any signature bucket and get the second one for half price.</p>
                    <button className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:scale-105 transition-all">Use Code: BUCKET50</button>
                </div>
                <div className="bg-gradient-to-r from-secondary to-yellow-500 p-8 rounded-3xl text-white relative overflow-hidden group">
                    <span className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">LUNCH SPECIAL</span>
                    <h3 className="text-3xl font-black mb-2">£5.00 Zinger Meal</h3>
                    <p className="text-white/80 mb-6">Complete meal deal including burger, small fries, and a drink.</p>
                    <button className="bg-white text-secondary font-bold px-8 py-3 rounded-full hover:scale-105 transition-all">Claim Now</button>
                </div>
            </div>
        </AuxiliaryPage>
    );
}
