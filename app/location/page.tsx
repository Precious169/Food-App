import AuxiliaryPage from "../components/AuxiliaryPageTemplate";

export default function LocationPage() {
    return (
        <AuxiliaryPage title="Our Locations">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white dark:bg-[#1a0d0f] p-8 rounded-3xl border border-[#e5dcdd] dark:border-[#3d2a2d] hover:border-primary transition-all">
                    <h3 className="text-2xl font-black text-primary mb-2">Manchester Central</h3>
                    <p className="font-bold text-[#181112] dark:text-white">123 Deansgate, Manchester, M3 2BQ</p>
                    <p className="mt-4">Opening Hours: 11:00 - 23:00</p>
                    <button className="mt-6 text-secondary font-bold flex items-center gap-2">View on Map <span className="material-symbols-outlined">map</span></button>
                </div>
                <div className="bg-white dark:bg-[#1a0d0f] p-8 rounded-3xl border border-[#e5dcdd] dark:border-[#3d2a2d] hover:border-primary transition-all">
                    <h3 className="text-2xl font-black text-primary mb-2">Old Trafford</h3>
                    <p className="font-bold text-[#181112] dark:text-white">56 Sir Matt Busby Way, Stretford, M16 0QG</p>
                    <p className="mt-4">Opening Hours: 10:00 - 01:00</p>
                    <button className="mt-6 text-secondary font-bold flex items-center gap-2">View on Map <span className="material-symbols-outlined">map</span></button>
                </div>
            </div>
        </AuxiliaryPage>
    );
}
