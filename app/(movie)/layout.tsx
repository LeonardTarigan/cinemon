import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MovieLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
